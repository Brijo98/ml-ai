import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SentimentRoutingModule } from './sentiment-routing.module';
import { SentimentListComponent } from './sentiment-list/sentiment-list.component';
import { SentimentAddComponent } from './sentiment-add/sentiment-add.component';
import { SentimentViewComponent } from './sentiment-view/sentiment-view.component';


@NgModule({
  declarations: [
    SentimentListComponent,
    SentimentAddComponent,
    SentimentViewComponent
  ],
  imports: [
    CommonModule,
    SentimentRoutingModule
  ]
})
export class SentimentModule { }
