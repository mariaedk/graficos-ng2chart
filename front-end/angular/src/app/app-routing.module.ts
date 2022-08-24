import { PolarChartComponent } from './components/polar-chart/polar-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'barchart', component: BarChartComponent },
  { path:'polarchart', component: PolarChartComponent },
  {path: '', redirectTo: '/barchart', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
