import { Component, OnInit,Input } from '@angular/core';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { BookingService } from '../_services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

	loading = false;
	bookingToken:string;
	bookingIds:any[];
	data=[];

  constructor(private bookingService: BookingService, private route: ActivatedRoute) { }
  
  title = 'app';



	
  ngOnInit() {
	  this.bookingToken=this.route.params['_value'].id;
	     this.bookingService.getBookings(this.bookingToken)
            .pipe(first())
            .subscribe(
                data => {
					
					
					console.log(data);
					var i;
					for (i = 0; i < Object.keys(data).length; i++) { 
						this.bookingIds += data[i]["bookingId"];
						this.data.push({bookingId:data[i]["bookingId"], 
						Cliente:JSON.parse(data[i]["bookingFields"])["firstName"]+" "+JSON.parse(data[i]["bookingFields"])["lastName"],
						bookingTime:new Date(parseInt(data[i]["bookingTime"], 10)).toString() ,
						address:JSON.parse(data[i]["bookingFields"])["location"]["streetAddress"], price:data[i]["bookingPrice"]});
					}
	
                },
                error => {
                    this.loading = false;
                });
  }
  
 

}
