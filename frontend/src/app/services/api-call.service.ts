import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  id?:number;
  isEditClicked:boolean = false

  constructor(public http:HttpClient) { 

  }

  getDetails(offset:number,limit:number){
    const params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString())

    return this.http.get<any>('http://192.1.200.162:3000/details',{ params })
  }

  getTotalCount(){
    return this.http.get<any>('http://192.1.200.162:3000/countDetails')
  }

  postDetails(details:{}){
    return this.http.post<any>('http://192.1.200.162:3000/details',details)
  }

  deleteDetails(id:number){
    console.log("Deleted detail of uuid = "+id);
    return this.http.patch<any>(`http://192.1.200.162:3000/deleteDetails/${id}`,{})
  }

  findDetail(id:number){
    return this.http.get<any>(`http://192.1.200.162:3000/details/${id}`,{})
  }

  patchDetails(id:number, details:{}){
    console.log("Updating detail with UUID = "+id);
    console.log(details);
    
    return this.http.patch<any>(`http://192.1.200.162:3000/details/${id}`, details)
    
  }
}
