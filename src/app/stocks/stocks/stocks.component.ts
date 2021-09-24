import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { startWith, map, filter } from 'rxjs/operators';
import { Stock } from '../models/stock';
import { SocketService } from '../services/socket-service.service';
import { selectFeatureStock } from '../store/stocks/stocks.selectors';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
})
export class StocksComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  stocks$: Observable<Stock[]> = new Observable<Stock[]>();
  switchers = [
    { ticker: 'AAPL', checked: true },
    { ticker: 'GOOGL', checked: true },
    { ticker: 'MSFT', checked: true },
    { ticker: 'AMZN', checked: true },
    { ticker: 'FB', checked: true },
    { ticker: 'TSLA', checked: true },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store$: Store,
    private route: ActivatedRoute,
  ) {
      this._formInitialize();
  } 

  ngOnInit() {
    
    this.stocks$ = combineLatest([
      this.store$.select(selectFeatureStock),
      this.form.valueChanges.pipe(startWith(this.form.value)),
    ]).pipe(
      map(([stocks, switcherForm]) => stocks.filter((stock) => switcherForm[stock.ticker]))
    )
    

    
    
  }



  navigateToStockDesecription(ticker: string) {
    this.router.navigate([ticker],{relativeTo: this.route})
  }
  private _formInitialize(): void {
    this.form = this.fb.group(
      this.switchers.reduce(
        (group, switcher) => ({
          ...group,
          [switcher.ticker]: [switcher.checked],
        }),
        {}
      )
    );
  }
}
