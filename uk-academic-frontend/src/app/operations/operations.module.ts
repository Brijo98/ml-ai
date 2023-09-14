import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    MatTabsModule,
    NgxSpinnerModule,
    FormsModule,
    MatButtonModule
  ]
})
export class OperationsModule { }
