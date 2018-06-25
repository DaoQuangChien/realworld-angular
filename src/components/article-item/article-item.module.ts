import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyMaterialModule } from '../../app/material.module';

import { ArticleItemComponent } from './article-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyMaterialModule
  ],
  declarations: [
    ArticleItemComponent
  ],
  exports: [
    ArticleItemComponent
  ],
  providers: []
})
export class HomeModule { }
