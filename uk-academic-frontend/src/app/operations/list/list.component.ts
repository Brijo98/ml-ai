import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { MockServerResultsService } from './mock-server-results-service';
// import { CorporateEmployee } from './model/corporate-employee';
// import { ColumnMode } from '@swimlane/ngx-datatable/public-api';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { NgxSpinnerService } from 'ngx-spinner';
// import { ColumnMode } from '../../../../node_modules/@swimlane/ngx-datatable';
import { ApiService } from 'src/app/api.service';
import { OperationList, OperationMeta } from 'src/app/model/OperationList';
import { Page } from 'src/app/model/Page';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent {
  readonly allPath = '/operations'
  page = new Page();
  rows = new Array<OperationList>();

  ColumnMode = ColumnMode;
  selected = [];
  SelectionType = SelectionType;
  columns = [
    { name: 'id' }, 
    { name: 'type' }, 
    { name: 'user_id' }, 
    { name: 'is_processing_done' }, 
    { name: 'is_extraction_done' }, 
    { name: 'is_sentiment_performed' }, 
    // { name: 'created_at' }, 
    // { name: 'updated_at'},
  ]

  constructor(private serverResultsService: ApiService, private router: Router, private spinnerService: NgxSpinnerService) {
    this.page.pageNumber = 1;
    this.page.size = 10;
    spinnerService.show()
  }
  

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo: any) {
    this.page.pageNumber = pageInfo.offset;
    this.serverResultsService.getAll(this.allPath + '?page='+(this.page.pageNumber+1) ).subscribe((pagedData: {message: string, data:  OperationList[]}) => {
      console.log(pagedData);
      this.spinnerService.hide()
      
      // this.page.pageNumber = pagedData.data.meta.current_page
      // this.page.size = pagedData.data.meta.per_page
      // this.page.totalElements = pagedData.data.meta.total
      // this.page.totalPages = pagedData.data.meta.last_page
      this.rows = pagedData.data;
    });
  }

  selectedRow(selected: any) {
    console.log(selected);
    this.router.navigate([`/operations/view/${this.selected[0]['id']}`])
  }
}
