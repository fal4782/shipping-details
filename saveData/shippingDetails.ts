// import { Component, OnInit } from '@angular/core';
// import { ApiCallService } from '../services/api-call.service';
// import { MessageService } from 'primeng/api';

// interface PageEvent {
//   first: number;
//   rows: number;
//   page: number;
//   pageCount: number;
// }

// @Component({
//   selector: 'app-shipping-details',
//   templateUrl: './shipping-details.component.html',
//   styleUrls: ['./shipping-details.component.css'],
//   providers: [MessageService]
// })
// export class ShippingDetailsComponent implements OnInit {

//   id!:number
//   shippingDetails!: Array < any > ;
//   visible: boolean = false;

//   noOfDetails:number = 10;

//   first: number = 0
//   rows: number = 10

//   prerequisite() {
//     this.getDetails()
//   }

//   constructor(private apiService: ApiCallService, private messageService: MessageService) {}

//   ngOnInit(): void {
//     this.prerequisite()
//   }

//   getDetails() {
//     this.apiService.getDetails().subscribe((data) => {
//       this.shippingDetails = data.details
//       this.noOfDetails = data.count      

//       console.log(this.noOfDetails);
      
//     })
//   }

//   deleteDetails(id:number) {
//     this.apiService.deleteDetails(id).subscribe((data) => {
//       console.log(data);
//     })
//     window.location.reload()
//   }

//   editBtn(id: number) {
//     // console.log(id);
//     this.apiService.id = id
//     this.apiService.isEditClicked = true
//     console.log(id);


//   }

//   showToast(id:number){
//     this.id=id
//     if (!this.visible) {
//       this.messageService.add({
//         key: 'confirm',
//         sticky: true,
//         severity: 'warn',
//         summary: 'Are you sure?',
//         detail: 'Confirm to proceed'
//       });
//       this.visible = true;
//     }
//   }


//   onConfirm(id:number) {
//     this.messageService.clear('confirm');
//     console.log('onConfirm',id);
//     this.deleteDetails(this.id)
    
//     this.visible = false;
//   }

//   onReject() {
//     this.messageService.clear('confirm');
//     this.visible = false;
//   }

//   onPageChange(event: any) {
//     this.first = event.first;
//     this.rows = event.rows;
//   }
  
// }