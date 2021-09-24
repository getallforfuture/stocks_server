import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectParamTicker } from 'src/app/store/router/router.selectors';
import { ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { selectFeatureStockHistory } from '../../store/stocks/stocks.selectors';
import { withLatestFrom, map, filter, tap } from 'rxjs/operators';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { StocksHistory } from '../../models/stock';


@Component({
  selector: 'app-stocks-item',
  templateUrl: './stocks-item.component.html',
  styleUrls: ['./stocks-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StocksItemComponent {
  routerParam$: Observable<string | undefined> =
    this.store$.select(selectParamTicker);

  history$ = this.store$
    .select(selectFeatureStockHistory)
    .pipe(withLatestFrom(this.routerParam$))
    .pipe(
      filter(
        ([history, routerParam]: [StocksHistory, string | undefined]) =>
          Boolean(history) && Boolean(routerParam)
      ),
      map(([history, routerParam]) => history[routerParam!].slice(-10))
    );

  lineChartData$ = this.history$
    .pipe(
      filter(() => isPlatformBrowser(this._platformId)),
      map( historyArray => {
        return [
          {
            data: historyArray.map((historyItem) => historyItem.price),
            label: historyArray.map( historyItem => historyItem.ticker).slice(0)[0],
          },
        ];
      })
    );

  lineChartLabels$ = this.history$
    .pipe(
      map( historyArray => {
        return historyArray.map((historyItem) => this.datePipe.transform(historyItem.last_trade_time, 'h:mm:ss a')!
        );
      }),
    );

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartOptions: ChartOptions = { 
    responsive: true,
    animation: {
      duration: 0
    },
   }

  constructor(
    private store$: Store,
    private datePipe: DatePipe,
    @Inject(PLATFORM_ID) private readonly _platformId: Object
    ) {}
}


