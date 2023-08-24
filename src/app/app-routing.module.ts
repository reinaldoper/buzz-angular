import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ResultComponent } from './page/result/result.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, pathMatch: 'full',
  },
  {
    path: 'result',
    component: ResultComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
