import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly API_URL = environment.API_URL

  constructor(private httpService: HttpClient) { }

  getAll(path: string) {
    return this.httpService.get<any>(this.API_URL + path, {
      headers: {
        authorization: environment.TOKEN
      }
    })
  }

  save(path:string, data: any) {
    return this.httpService.post<any>(this.API_URL + path, data, {
      headers: {
        authorization: environment.TOKEN
      }
    })
  }

  getById(path:string, id:number){
    return this.httpService.get<any>(this.API_URL + path + "/" + id, {
      headers: {
        authorization: environment.TOKEN
      }
    })
  }
}
