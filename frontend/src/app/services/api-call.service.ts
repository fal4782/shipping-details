import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(public http:HttpClient) { 

  }

  getDetails(){
    return this.http.get<any>('http://localhost:3000/details')
  }

  postDetails(details:{}){
    return this.http.post<any>('http://localhost:3000/details',details)
  }

  deleteDetails(id:number){
    console.log(id);
    
    return this.http.patch<any>(`http://localhost:3000/deleteDetails/${id}`,{})
  }
}
