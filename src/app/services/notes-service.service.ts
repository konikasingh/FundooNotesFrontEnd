import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './HttpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  token:any;
  constructor(private httpService:HttpService) { 
    this.token=localStorage.getItem('token')
  }

  userCreateNotes(data:any,token:any){
    console.log("token",this.token)
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization :'Bearer '+ this.token
      })
    }
    return this.httpService.postService('/Notes',data,true,header)
  }
  userGetAllNotes(token:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization:'Bearer '+ token
      })
    }
    return this.httpService.getService('/Notes/GetAllNotesData',true,header);

  }
}

