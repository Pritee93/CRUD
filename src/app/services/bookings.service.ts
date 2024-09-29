import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
//  private bookingList:number = 0;
 sub$ = new Subject;

  constructor() { }

  // sendBookingCount(count:number){
  //   this.bookingList = count;
  // }

  // getBookingCount(){
  //   return this.bookingList;
  // }

  sendBookingCount(count:number){
    this.sub$.next(count);
  }
}
