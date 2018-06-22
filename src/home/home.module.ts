import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatGridListModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';

import { HomePageComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule
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
