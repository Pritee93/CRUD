import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Booking } from '../create-booking/create-booking.component';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css'],
})
export class EditBookingComponent {
  selectedBookingId: string | null = null;

  bookingObj:Booking = new Booking();

  cities: string[] = [
    'Pune',
    'Mumbai',
    'Chennai',
    'Bangalore',
    'Shimla',
    'New Delhi',
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.selectedBookingId = this.activatedRoute.snapshot.paramMap.get('id');

    console.log('selected booking id is :', this.selectedBookingId);
  }

  ngOnInit() {
    this.getBookingDetailsById();
  }

  getBookingDetailsById() {
    const endPoint = 'bookings?id=' + this.selectedBookingId;
    this.apiService.getDataFromServer(endPoint).subscribe({
      next: (response: any) => {
        console.log('Response is : ', response);
        if (response && response.length > 0) {
          this.bookingObj = response[0];
        }
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  updateBooking() {
    console.log("updated data",this.bookingObj);
    // const endPoint = "bookings?id=" + this.selectedBookingId;
    const endPoint = "bookings/" + this.selectedBookingId;

    this.apiService.putDataToServer(endPoint,this.bookingObj).subscribe({
      next:(response:any)=>{
        console.log("records updated");
        alert("Bookings Updated!!!");
      },

      error:(error:any)=>{

      }
    })
  }
}
