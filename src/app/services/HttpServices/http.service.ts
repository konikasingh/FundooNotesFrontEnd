import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private BaseUrl="https://localhost:44354/api";

  constructor(private httpClient:HttpClient) { } 
  postService(url:any,data:any={},token:boolean=true,httpOptions:any={})
  {
    return this.httpClient.post(this.BaseUrl+url,data,token && httpOptions)
  }
  
}



