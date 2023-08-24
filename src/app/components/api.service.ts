import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { TTypeBuzz } from './TTypeBuzz';
import { Observable } from 'rxjs';
import { Url } from './enviroment/api';
import { Buzz } from './TTypeBuzz';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = Url;
  buzz: Buzz[] = [];
  result: number = 0;

  constructor(private http:HttpClient) { }

  getBuzz(): Observable<TTypeBuzz>{
    return this.http.get<TTypeBuzz>(this.url);
  }

  setResult(value: number){
    this.result = value;
  }

  getResult(): number{
    return this.result;
  }

}
