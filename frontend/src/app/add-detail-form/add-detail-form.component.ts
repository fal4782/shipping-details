import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiCallService } from '../services/api-call.service';
import * as moment from 'moment';



@Component({
  selector: 'app-add-detail-form',
  templateUrl: './add-detail-form.component.html',
  styleUrls: ['./add-detail-form.component.css']
})
export class AddDetailFormComponent {

  addDetailsForm:any;
  

  prerequisite(){
    this.createForm()
  }

  constructor(private formBuilder:FormBuilder, private apiService:ApiCallService){ }

  ngOnInit():void{
    this.prerequisite()
  }

  createForm(){
    this.addDetailsForm = this.formBuilder.group({
      uuid: [{value:'', disabled:true}],
      productName:  ['',Validators.required],
      dispatchTime: ['', Validators.required],
      dispatchDate: ['', Validators.required],
      quantity: ['', Validators.required]
    })
  }

  get shippingDetailsFormControl(){
    return this.addDetailsForm.controls
  }

  saveDetails(){
  
    const shippingDetails={
      productName : this.shippingDetailsFormControl.productName.value,
      dispatchTime: moment(this.shippingDetailsFormControl.dispatchTime.value).format('HH:mm:ss'),
      dispatchDate: moment(this.shippingDetailsFormControl.dispatchDate.value).format('YYYY-MM-DD'),
      quantity: this.shippingDetailsFormControl.quantity.value
    }

    console.log(shippingDetails);
    

    this.apiService.postDetails(shippingDetails).subscribe((details)=>{
      console.log(details);
      
    })
    
  }

}
