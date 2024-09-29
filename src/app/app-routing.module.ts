import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';

const routes: Routes = [
  {path:"bus/booking-list",component:BookingListComponent},
  {path:"bus/create-booking",component:CreateBookingComponent},
  {path:"bus/edit-booking/:id", component:EditBookingComponent},
  {path:"",redirectTo:"/bus/booking-list",pathMatch:"full"},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
