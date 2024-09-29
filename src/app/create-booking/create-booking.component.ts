import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent {
  bookingObj: Booking = new Booking();

  cities: string[] = [
    'Pune',
    'Mumbai',
    'Chennai',
    'Bangalore',
    'Shimla',
    'New Delhi',
  ];

  constructor(private apiService: ApiService) {}

  createNewBooking() {
    console.log('new booking', this.bookingObj);
    this.apiService.postDataToServer('bookings', this.bookingObj).subscribe({
        next: (response: any) => {
          console.log('Data saved successfully');
          alert("Booking created successfully");
        }
      });
  }
}

 export class Booking {
  id!: number;
  name!: string;
  source!: string;
  destination!: string;
  date!: string;
}
