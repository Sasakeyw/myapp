import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 画面繊維のポイント
const routes: Routes = [
  { path: '', redirectTo: 'costcalc', pathMatch: 'full' },
  { path: 'costcalc', loadChildren: './costcalc/costcalc.module#CostcalcModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
