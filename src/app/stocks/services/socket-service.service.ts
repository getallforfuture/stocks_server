import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
//import { Socket } from 'ngx-socket-io';

import { filter } from 'rxjs/operators';
import { Socket,io } from 'socket.io-client';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: any;
  constructor(
    @Inject(PLATFORM_ID) private readonly _platformId: Object,
    ) {
      if(isPlatformBrowser(this._platformId)){
        this.socket = io("http://localhost:3000/")
      }
     }

  startSending(){
    this.socket.emit('start')
  }
  getStocks() {
    // return this.socket.fromEvent<Stock[]>('ticker').pipe(
    //   filter(() => isPlatformBrowser(this._platformId))
    // );
    return new Observable<Stock[]>(
      observer =>{
        this.socket.on('ticker', (tickers: Stock[]) => observer.next(tickers))
      }
    )
  }

}
