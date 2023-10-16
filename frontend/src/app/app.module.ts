import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HandleDetailFormComponent } from './handle-detail-form/handle-detail-form.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast'
import { PaginatorModule } from 'primeng/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RequiredPipe } from './pipes/required.pipe';
import { TimePipe } from './pipes/time.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HandleDetailFormComponent,
    ShippingDetailsComponent,
    RequiredPipe,
    TimePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextModule,
    InputNumberModule,
    ToastModule,
    PaginatorModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'', component: ShippingDetailsComponent},
      {path:'details', component:HandleDetailFormComponent}
    ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
