import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskService } from './task.service';


import { HttpModule } from '@angular/http'; // <— Import
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { ReactiveFormsModule }          from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewappointmentComponent } from './newappointment/newappointment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NewappointmentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
