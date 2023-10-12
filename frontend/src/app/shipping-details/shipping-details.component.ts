import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit{
  

  shippingDetails!:Array<any>;

  prerequisite(){
    this.getDetails()
  }

  constructor(private apiService:ApiCallService){ }

  ngOnInit(): void{
    this.prerequisite()
  }

  getDetails(){
    this.apiService.getDetails().subscribe((data)=>{
      this.shippingDetails = data
    })
  }

  deleteDetails(id:number){    
    this.apiService.deleteDetails(id).subscribe((data)=>{
      console.log(data);
      
    })
  }

}
