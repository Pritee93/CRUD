import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { BookingsService } from './services/bookings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-app';
  sub$ = new Subject();
  totalBookings : number|undefined;

  constructor(private bookingService:BookingsService){
      // this.totalBookings = this.bookingService.getBookingCount();
      this.bookingService.sub$.subscribe({
        next:(data:any)=>{
            console.log("Total Bookings : ",data);
            this.totalBookings = data;
        }
      })
      console.log("Total Bookings in app component ", this.totalBookings);
  }
  ngOnInit(){
    this.sub$.subscribe({
      next:(data:any)=>{
        console.log(data);
      }
    })

    this.sub$.next(10);
    this.sub$.next(30);
  }
}
