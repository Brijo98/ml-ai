import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  readonly dashboardPath = '/dashboard'
  data: {
    count: number,
    rawCount: number,
    processCount: number,
    keywordCount: number,
    sentimentCount: number
  } | null = null

  constructor (private apiService: ApiService, private spinnerService: NgxSpinnerService) {
    console.log("Dashboard Component");
    spinnerService.show()
  }

  ngOnInit(): void {
    this.apiService.getAll(this.dashboardPath).subscribe(d => {
      this.spinnerService.hide()
      this.data = d.data
      console.log(this.data);
    })
  }
}
