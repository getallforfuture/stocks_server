import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { StocksComponent } from './stocks/stocks.component';
import { StocksRoutingModule } from './stocks-routing-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StocksItemComponent } from './stocks/stocks-item/stocks-item.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { stocksReducer, STOCKS_REDUCER_NODE } from './store/stocks/stocks.reducer';
import { StockEffects } from './store/stocks/stocks.effects';
import { ChartsModule } from 'ng2-charts'


@NgModule({
  declarations: [StocksComponent, StocksItemComponent],
  imports: [
    CommonModule,
    StocksRoutingModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(STOCKS_REDUCER_NODE,stocksReducer),
    EffectsModule.forFeature([StockEffects]),
    ChartsModule
  ],
  providers:[DatePipe]
})
export class StocksModule { }
