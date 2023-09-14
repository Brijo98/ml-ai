import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { id } from '@swimlane/ngx-datatable';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  readonly viewPath = "/operations"
  readonly dataProcessingPath = '/processed-data'
  readonly keywordExtractionPath = '/keyword-extraction'
  readonly sentimentPath = '/sentiment-analysis'
  message= "Loading"
  data: any
  id: number | null = null

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiService, private spinnerService: NgxSpinnerService) {
    spinnerService.show()
  }
  
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    // this.apiService.getById(this.viewPath, this.id).subscribe(e => {
    //   console.log(e);
    //   this.spinnerService.hide()
    //   this.data = e.data
    // })
    this.get()
  }

  get() {
    this.apiService.getById(this.viewPath, this.id!).subscribe(e => {
      console.log(e);
      this.spinnerService.hide()
      this.data = e.data
    })
  }

  startDataProcessing() {
    this.message = "Cleansing"
    this.spinnerService.show()
    this.apiService.getById(this.dataProcessingPath,this.id!).subscribe(e => {
      this.get()
      this.spinnerService.hide()
    })
  }
  startKeywordExtraction() {
    this.message = "Extracting"
    this.spinnerService.show()
    this.apiService.getById(this.keywordExtractionPath,this.id!).subscribe(e => {
      this.get()
      this.spinnerService.hide()
    })
  }
  startSentimentAnalysis() {
    this.message = "Analysing"
    this.spinnerService.show()
    this.apiService.getById(this.sentimentPath,this.id!).subscribe(e => {
      this.get()
      this.spinnerService.hide()
    })
  }
}
