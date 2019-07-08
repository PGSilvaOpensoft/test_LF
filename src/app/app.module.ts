import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LfBootstrapThemeModule, LF_BOOTSTRAP_THEME_SERVICES} from '@lightweightform/bootstrap-theme';
import{ LF_APP_I18N, LfCoreModule, LF_APP_SCHEMA, LF_CORE_SERVICES} from '@lightweightform/core';
import { MobxAngularModule } from 'mobx-angular';
import {appSchema} from './app.schema';

  
import { AppRoutingModule } from './app-routing.module';

import { reservationDetailsComponent } from './components/reservation-details/reservation-detail.component';
import { GuestComponent } from './components/guests/components/guest/guest.component';
import { OtherServicesComponent } from './components/guests/components/guest/other-services/other-services.component';
import { FoodComponent } from './components/guests/components/guest/food/food.component';
import { FoodTableComponent } from './components/guests/components/guest/food/food-table/food-table.component';
import { AccommodationComponent } from './components/reservation-details/components/accommodation/accomodation.component';
import { I18N_SELF_CHECK_IN_EN_US } from './app.en.US';


@NgModule({
  imports: [
    BrowserModule,
    LfBootstrapThemeModule,
    LfCoreModule,
    MobxAngularModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    GuestComponent,
    OtherServicesComponent,
    FoodTableComponent,
    FoodComponent,
    AccommodationComponent,
    reservationDetailsComponent,
  ],
  providers: [
    {provide: LF_APP_SCHEMA, useValue: appSchema},
    {provide: LF_APP_I18N, useValue: {'en-US' : I18N_SELF_CHECK_IN_EN_US}},
    LF_CORE_SERVICES,
    LF_BOOTSTRAP_THEME_SERVICES,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
