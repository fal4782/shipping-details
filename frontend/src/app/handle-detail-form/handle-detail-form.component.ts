import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiCallService } from '../services/api-call.service';
import * as moment from 'moment';
import { Router } from '@angular/router'
import { MessageService } from 'primeng/api';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-handle-detail-form',
  templateUrl: './handle-detail-form.component.html',
  styleUrls: ['./handle-detail-form.component.css'],
  providers: [MessageService]
})
export class HandleDetailFormComponent {

  addDetailsForm: any;
  id: any = this.apiService.id
  isEditClicked: boolean = this.apiService.isEditClicked
  isFormInvalid ? : boolean = false



  prerequisite() {
    this.createForm()
    this.getFormData(this.id)
  }

  constructor(private formBuilder: FormBuilder, private apiService: ApiCallService, private router: Router, private messageService: MessageService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.prerequisite()
  }

  showSuccessToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Saved successfully!'
    });
   console.log("toasteerrrrrr");
  }

  showEditedToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Edited successfully!'
    });
   console.log("toasteerrrrrr for edit");
   
    
  }

  createForm() {
    this.addDetailsForm = this.formBuilder.group({
      uuid: [{value: "(will create it for you :3)", disabled: true}],
      productName: ['', Validators.required],
      dispatchTime: ['', Validators.required],
      dispatchDate: ['', Validators.required],
      quantity: [0]
    })
  }

  get shippingDetailsFormControl() {
    return this.addDetailsForm.controls
  }

  saveDetails() {

    if (!this.addDetailsForm.invalid) {

      console.log(moment(this.shippingDetailsFormControl.dispatchTime.value));
      console.log(this.shippingDetailsFormControl.dispatchTime.value);
      
      
      const shippingDetails = {
        productName: this.shippingDetailsFormControl.productName.value,
        dispatchTime: moment(this.shippingDetailsFormControl.dispatchTime.value,'HH:mm').format('HH:mm'),
        dispatchDate: moment(this.shippingDetailsFormControl.dispatchDate.value).format('YYYY-MM-DD'),
        quantity: this.shippingDetailsFormControl.quantity.value
      }

      if (!this.isEditClicked) {
        this.apiService.postDetails(shippingDetails).subscribe((details) => {
          console.log(details)
        })

        console.log("save toast");
        this.showSuccessToast();

      } else {
        this.apiService.patchDetails(this.id, shippingDetails).subscribe((detail) => {
          console.log(detail)
        })
        console.log('edit toast');
        this.showEditedToast()
        
      }
      
      setTimeout(() => {
        this.router.navigate(['/'])
        console.log("Navigating to Main Page");
      }, 1000);
      

    } else {
      this.isFormInvalid = true
    }



  }

  getFormData(id: number) {

    if (this.isEditClicked) {
      this.apiService.findDetail(id).subscribe((data) => {
        const detail = data[0]

        this.addDetailsForm.setValue({
          uuid: detail.uuid,
          productName: detail.product_name,
          dispatchTime: moment(detail.dispatch_time, "HH:mm:ss").format("HH:mm"),
          dispatchDate: moment(detail.dispatch_date).format('MM/DD/YYYY'),
          quantity: detail.quantity
        })

        this.addDetailsForm.get('productName').disable()


      })
    }
  }

  cancelBtn() {
    this.apiService.isEditClicked = false;
  }

  

}
