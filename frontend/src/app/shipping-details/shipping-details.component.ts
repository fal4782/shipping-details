import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { MessageService } from 'primeng/api';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css'],
  providers: [MessageService]
})
export class ShippingDetailsComponent implements OnInit {

  id!:number
  shippingDetails!: Array < any > ;
  visible: boolean = false;

  totalCountOfDetails:number = 0;
  noOfDetails:number = 10;

  first: number = 0
  rows: number = 5
  offset:number = 0
  limit: number = 5

  prerequisite() {
    this.getDetails(this.offset,this.limit)
    this.getTotalCount()
  }

  constructor(private apiService: ApiCallService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.prerequisite()
  }

  getDetails(offset:number, limit:number) {
    this.apiService.getDetails(offset,limit).subscribe((data) => {
      this.shippingDetails = data.details
      this.noOfDetails = data.count     
      // console.log(this.shippingDetails);
    })
    
    
  }

  getTotalCount(){
    this.apiService.getTotalCount().subscribe((data)=>{
      this.totalCountOfDetails = data
    })
  }

  deleteDetails(id:number) {
    this.apiService.deleteDetails(id).subscribe((data) => {
      console.log(data);
    })
    window.location.reload()
  }

  editBtn(id: number) {
    // console.log(id);
    this.apiService.id = id
    this.apiService.isEditClicked = true
    // console.log(id);
  }

  showToast(id:number){
    this.id=id
    if (!this.visible) {
      this.messageService.add({
        key: 'confirm',
        sticky: true,
        severity: 'warn',
        summary: 'Are you sure?',
        detail: 'Confirm to proceed'
      });
      this.visible = true;
    }
  }


  onConfirm(id:number) {
    this.messageService.clear('confirm');
    console.log('onConfirm',id);
    this.deleteDetails(this.id)
    this.visible = false;
  }

  onReject() {
    this.messageService.clear('confirm');
    this.visible = false;
  }

  onPageChange(event: any) {
    // console.log(event);
    // console.log("testing"+this.noOfDetails)    
    this.first = event.first;
    this.rows = event.rows;
    this.offset = this.first;
    this.limit = this.rows;
    this.getDetails(this.offset,this.limit);
  }
  
}