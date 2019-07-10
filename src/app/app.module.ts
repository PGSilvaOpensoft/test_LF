import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  LfBootstrapThemeModule,
  LF_BOOTSTRAP_THEME_SERVICES,
} from '@lightweightform/bootstrap-theme';
import {
  LF_APP_I18N,
  LfCoreModule,
  LF_APP_SCHEMA,
  LF_CORE_SERVICES,
  LF_I18N_LANGUAGE_QUERY_PARAM,
} from '@lightweightform/core';
import {MobxAngularModule} from 'mobx-angular';
import {appSchema} from './app.schema';
import {AppRoutingModule} from './app-routing.module';
import {AccommodationComponent} from './components/reservation-details/accommodation/accomodation.component';
import {GuestComponent} from './components/guests/guest/guest.component';
import {FoodComponent} from './components/guests/guest/components/food/food.component';
import {OtherServicesComponent} from './components/guests/guest/components/other-services/other-services.component';
import {FoodTableComponent} from './components/guests/guest/components/food/food-table/food-table.component';
import {reservationDetailsComponent} from './components/reservation-details/reservation-details.component';
import {APP_I18N} from './app.i18n';

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
    {
      provide: LF_APP_I18N,
      useValue: APP_I18N,
    },
    {provide: LF_I18N_LANGUAGE_QUERY_PARAM, useValue: 'l'},
    LF_CORE_SERVICES,
    LF_BOOTSTRAP_THEME_SERVICES,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
