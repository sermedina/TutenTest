import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgxDataTableModule } from 'projects/ngx-data-table/src/lib/ngx-data-table/ngx-data-table.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
    routing,
    BrowserAnimationsModule,
	NgxDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
