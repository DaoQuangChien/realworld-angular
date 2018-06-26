import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatListModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule
  ],
})
export class MyMaterialModule { }
