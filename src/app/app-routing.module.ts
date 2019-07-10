import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LfRoutes, LF_ROUTER_BASE_PATH} from '@lightweightform/core';

import {reservationDetailsComponent} from './components/reservation-details/reservation-details.component';
import {AccommodationComponent} from './components/reservation-details/accommodation/accomodation.component';
import {GuestComponent} from './components/guests/guest/guest.component';
import {FoodComponent} from './components/guests/guest/components/food/food.component';
import {OtherServicesComponent} from './components/guests/guest/components/other-services/other-services.component';

/**
 * Application routes.
 */
const routes: LfRoutes = [
  {path: '', redirectTo: 'reservationDetails', pathMatch: 'full'},
  {path: 'reservationDetails', component: reservationDetailsComponent},
  {
    path: 'reservationDetails',
    children: [{path: 'accomodation', component: AccommodationComponent}],
  },
  {
    path: 'guests/:index',
    children: [
      {path: '', component: GuestComponent},
      {path: 'food', component: FoodComponent},
      {path: 'otherServices', component: OtherServicesComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule],
  providers: [{provide: LF_ROUTER_BASE_PATH, useValue: '/'}],
})
export class AppRoutingModule {}
