import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyMaterialModule } from '../app/material.module';

import { HomeRoutingModule } from './home-routing.module';

import { HomePageComponent } from './home.component';
import { ArticleItemComponent } from '../components/article-item/article-item.component';
import { HomeService } from './home.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MyMaterialModule
  ],
  declarations: [
    HomePageComponent,
    ArticleItemComponent,
  ],
  exports: [
    HomePageComponent,
  ],
  providers: [HomeService]
})
export class HomeModule { }
