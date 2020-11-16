import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppartementsPageRoutingModule } from './appartements-routing.module';

import { AppartementsPage } from './appartements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppartementsPageRoutingModule
  ],
  declarations: [AppartementsPage]
})
export class AppartementsPageModule {}
