// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiCallService {

//   id?:number;
//   isEditClicked:boolean = false

//   constructor(public http:HttpClient) { 

//   }

//   getDetails(){
//     return this.http.get<any>('http://localhost:3000/details')
//   }

//   postDetails(details:{}){
//     return this.http.post<any>('http://localhost:3000/details',details)
//   }

//   deleteDetails(id:number){
//     console.log("Deleted detail of uuid = "+id);
//     return this.http.patch<any>(`http://localhost:3000/deleteDetails/${id}`,{})
//   }

//   findDetail(id:number){
//     return this.http.get<any>(`http://localhost:3000/details/${id}`,{})
//   }

//   patchDetails(id:number, details:{}){
//     console.log("Updating detail with UUID = "+id);
//     console.log(details);
    
//     return this.http.patch<any>(`http://localhost:3000/details/${id}`, details)
    
//   }
// }
