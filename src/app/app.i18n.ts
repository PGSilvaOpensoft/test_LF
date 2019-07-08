import {LfI18n} from '@lightweightform/core';
import {I18N_EN_US, I18N_PT_PT} from '@lightweightform/bootstrap-theme';
import {GUEST_I18N_EN_US} from './components/guests/guest/i18n/guest.i18n.en-US';
import {GUESTS_I18N_EN_US} from './components/guests/i18n/guests.i18n.en-US';
import {RESERVATION_DETAILS_I18N_EN_US} from './components/reservation-details/i18n/reservation-details.i18n.en-US';
import {ACCOMODATION_I18N_EN_US} from './components/reservation-details/accommodation/i18n/accomodation.i18n.en-US';
import {FOOD_I18N_EN_US} from './components/guests/guest/components/food/i18n/food.i18n.en-US';
import {OTHER_SERVICES_I18N_EN_US} from './components/guests/guest/components/other-services/i18n/other-services.i18n.en-US';
import {GUEST_I18N_PT_PT} from './components/guests/guest/i18n/guest.i18n.pt-PT';
import {GUESTS_I18N_PT_PT} from './components/guests/i18n/guests.i18n.pt-PT';
import {RESERVATION_DETAILS_I18N_PT_PT} from './components/reservation-details/i18n/reservation-details.i18n.pt-PT';
import {ACCOMODATION_I18N_PT_PT} from './components/reservation-details/accommodation/i18n/accomodations.i18n.pt-PT';
import {FOOD_I18N_PT_PT} from './components/guests/guest/components/food/i18n/food.i18n.pt-Pt';
import {OTHER_SERVICES_I18N_PT_PT} from './components/guests/guest/components/other-services/i18n/other-services.i18n.pt-PT';
import {FOOD_TABLE_I18N_PT_PT} from './components/guests/guest/components/food/food-table/i18n/food-table.i18n.pt-PT';
import {I18N_SELF_CHECK_IN_PT_PT} from './i18n/app.i18n.pt-PT';
import {I18N_SELF_CHECK_IN_EN_US} from './i18n/app.i18n.en-US';
import {FOOD_TABLE_I18N_EN_US} from './components/guests/guest/components/food/food-table/i18n/food-table.i18n.en-US';

export const APP_I18N: Record<string, any> = {
  'en-US': LfI18n.mergeTranslations(
    I18N_EN_US,
    I18N_SELF_CHECK_IN_EN_US,
    GUEST_I18N_EN_US,
    GUESTS_I18N_EN_US,
    RESERVATION_DETAILS_I18N_EN_US,
    ACCOMODATION_I18N_EN_US,
    FOOD_I18N_EN_US,
    OTHER_SERVICES_I18N_EN_US,
    FOOD_TABLE_I18N_EN_US,
  ),

  'pt-PT': LfI18n.mergeTranslations(
    I18N_PT_PT,
    I18N_SELF_CHECK_IN_PT_PT,
    GUEST_I18N_PT_PT,
    GUESTS_I18N_PT_PT,
    RESERVATION_DETAILS_I18N_PT_PT,
    ACCOMODATION_I18N_PT_PT,
    FOOD_I18N_PT_PT,
    OTHER_SERVICES_I18N_PT_PT,
    FOOD_TABLE_I18N_PT_PT,
  ),
};
