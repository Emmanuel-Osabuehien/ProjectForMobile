import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsPage } from './ps.page';

const routes: Routes = [
  {
    path: '',
    component: PsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsPageRoutingModule {}
