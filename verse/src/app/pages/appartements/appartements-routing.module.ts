import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppartementsPage } from './appartements.page';

const routes: Routes = [
  {
    path: '',
    component: AppartementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppartementsPageRoutingModule {}
