import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyMaterialModule } from '../app/material.module';

import { HomeRoutingModule } from './home-routing.module';

import { HomePageComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MyMaterialModule
  ],
  declarations: [
    HomePageComponent,
  ],
  exports: [
    HomePageComponent,
  ],
  providers: []
})
export class HomeModule { }
