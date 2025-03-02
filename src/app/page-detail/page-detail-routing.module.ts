import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageDetailComponent} from "./page-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PageDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageDetailRoutingModule { }
