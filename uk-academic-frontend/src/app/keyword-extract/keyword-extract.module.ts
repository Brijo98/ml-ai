import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeywordExtractRoutingModule } from './keyword-extract-routing.module';
import { KeywordAddComponent } from './keyword-add/keyword-add.component';
import { KeywordViewComponent } from './keyword-view/keyword-view.component';
import { KeywordListComponent } from './keyword-list/keyword-list.component';


@NgModule({
  declarations: [
    KeywordAddComponent,
    KeywordViewComponent,
    KeywordListComponent
  ],
  imports: [
    CommonModule,
    KeywordExtractRoutingModule
  ]
})
export class KeywordExtractModule { }
