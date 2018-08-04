import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
	
	token:string;

  constructor(private http: HttpClient) { }
  
  getBookings(token: string) {
	  

	
	 const headers = new HttpHeaders()
	 .set('Adminemail', "testapis@tuten.cl")
	 .set('Token',token)
	 .set('App','APP_BCK')
	 .set("Content-Type", "application/json");
	 
	  
	  return this.http.get("https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true",{
	  headers: headers})
	  
  }
  
  	  
}
