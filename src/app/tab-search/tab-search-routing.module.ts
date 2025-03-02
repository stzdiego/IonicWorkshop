import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabSearchComponent } from "./tab-search.component";

const routes: Routes = [
  {
    path: '',
    component: TabSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabSearchRoutingModule { }
