import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksItemComponent } from './stocks/stocks-item/stocks-item.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  {path: '', component: StocksComponent},
  {path: ':ticker', component: StocksItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
