import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',
    redirectTo: '/tickers', 
    pathMatch: 'full'
  },
  { path:'tickers', 
    loadChildren:() => import('./stocks/stocks.module').then(m => m.StocksModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
