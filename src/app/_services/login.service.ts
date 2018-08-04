import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  


  login(username: string, password: string) {
	  

	
	 const headers = new HttpHeaders()
	 .set('Password', password)
	 .set('App','APP_BCK')
	 .set("Content-Type", "application/json");
	 
	  
	  return this.http.put("https://dev.tuten.cl/TutenREST/rest/user/" +username , "",{
	  headers: headers})
	  
  }
}
