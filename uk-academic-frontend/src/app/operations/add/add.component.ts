import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  readonly path = '/operations'
  type: string = 'Keyword Extraction'
  values: string[] = ['Keyword Extraction', 'Sentiment Analysis']
  data: string[] = []

  constructor(private apiService: ApiService, private spinnerService: NgxSpinnerService, private router: Router) {
    this.data.push("")
    
  }

  addNew() {
    console.log(this.data);

    this.data.push("")
  }

  remove(i: any) {
    console.log(i);
    this.data.splice(i, 1)
  }

  submit() {
    console.log(this.data);
    console.log(this.type);
    this.spinnerService.show()
    this.apiService.save(this.path, { type: this.type, data: this.data}).subscribe((e) => {
      this.spinnerService.hide()
      this.router.navigate(['/operations'])
    })
  }
}
