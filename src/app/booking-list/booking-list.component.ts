import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { BookingsService } from '../services/bookings.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'],
})
export class BookingListComponent {
  bookingList: any;
  constructor(private apiService: ApiService, private router:Router,private bookingService:BookingsService) {}

  ngOnInit() {
    this.apiService.getDataFromServer('bookings').subscribe({
      next: (data: any) => {
        //console.log("Data Received", data);
        this.bookingList = data; //only data binding here, tells how many entries are present 
        // console.log("Total bookings: ",this.bookingList.length);
        this.bookingService.sendBookingCount(this.bookingList.length);
      },

      error: (error: any) => {},
    });
  }



  editBooking(id:number){
    this.router.navigate(["/bus/edit-booking",id])
  }

  deleteBooking(id:number,index:number){
    const isConfirm = confirm("Do you want to delete booking?");
    if(isConfirm){
      const endPoint = "bookings/"+id;
      this.apiService.deleteDataFromServer(endPoint).subscribe({
        next:(response:any)=>{
          this.bookingList.splice(index,1);
        }
      })
    }
  }


  sendBookingCount(){
    this.bookingService.sendBookingCount(this.bookingList.length);

  }
}
