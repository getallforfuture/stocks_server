import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, toArray, tap, filter } from 'rxjs/operators';
import { SocketService } from '../../services/socket-service.service';
import {
  fetchStocks,
  fetchStocksHistorySuccess,
  fetchStocksSucces,
} from './stocks.actions';

@Injectable()
export class StockEffects implements OnInitEffects {
  fetchStocks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchStocks),
      filter(() => isPlatformBrowser(this._platformId)),
      tap(() => this.socketService.startSending()),
      mergeMap(() =>
        this.socketService
          .getStocks()
          .pipe(switchMap((stocks) => [
            fetchStocksSucces({ stocks }), 
            fetchStocksHistorySuccess({ stocks })
          ]))
      )
    )
  );

  constructor(
    private actions$: Actions,
    @Inject(PLATFORM_ID) private readonly _platformId: Object,
    private socketService: SocketService
  ) {}

  ngrxOnInitEffects(): Action {
    return fetchStocks();
  }
}
