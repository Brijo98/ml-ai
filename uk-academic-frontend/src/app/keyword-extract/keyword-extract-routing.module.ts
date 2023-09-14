import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeywordListComponent } from './keyword-list/keyword-list.component';

const routes: Routes = [
  {
    path: '',
    component: KeywordListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeywordExtractRoutingModule {}
