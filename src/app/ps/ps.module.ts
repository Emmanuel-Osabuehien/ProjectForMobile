import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsPageRoutingModule } from './ps-routing.module';

import { PsPage } from './ps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsPageRoutingModule
  ],
  declarations: [PsPage]
})
export class PsPageModule {}
