import {LfI18n} from '@lightweightform/core';
import {I18N_EN_US} from '@lightweightform/bootstrap-theme';
import { FOOD_I18N_EN_US } from './components/guests/components/guest/food/food.en-US';
import { OTHER_SERVICES_I18N_EN_US } from './components/guests/components/guest/other-services/other-services.en-US';
import { RESERVATION_DETAILS_I18N_EN_US } from './components/reservation-details/reservation-details.en-US';
import { FOOD_TABLE_I18N_EN_US } from './components/guests/components/guest/food/food-table/food-table.en-US';
import { ACCOMODATION_I18N_EN_US } from './components/reservation-details/components/accommodation/accomodation.en-US';
import { GUEST_I18N_EN_US } from './components/guests/components/guest/guest.en-US';
import { GUESTS_I18N_EN_US } from './components/guests/guests.en-US';






export const SOME_ERROR_OCCURRED_KEY = 'someErrorOccured';

export const I18N_SELF_CHECK_IN_EN_US = LfI18n.mergeTranslations(
  I18N_EN_US,
  FOOD_TABLE_I18N_EN_US,
  GUESTS_I18N_EN_US,
  RESERVATION_DETAILS_I18N_EN_US,
  ACCOMODATION_I18N_EN_US,
  FOOD_I18N_EN_US,
  OTHER_SERVICES_I18N_EN_US,
  GUEST_I18N_EN_US,
  {
    '*': {
      appTitleLg: 'Self Check-In',
      documentTitle: 'Self Check-In',
      appTitleSm: 'Self Check-In',
    },
  },
);
