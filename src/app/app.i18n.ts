import {LfI18n} from '@lightweightform/core';
import {I18N_EN_US} from '@lightweightform/bootstrap-theme';
import {GUEST_I18N_EN_US} from './components/guests/guest/i18n/guest.i18n.en-US';
import {GUESTS_I18N_EN_US} from './components/guests/i18n/guests.i18n.en-US';
import {RESERVATION_DETAILS_I18N_EN_US} from './components/reservation-details/i18n/reservation-details.i18n.en-US';
import {ACCOMODATION_I18N_EN_US} from './components/reservation-details/accommodation/i18n/accomodation.i18n.en-US';
import {FOOD_I18N_EN_US} from './components/guests/guest/components/food/i18n/food.i18n.en-US';
import {OTHER_SERVICES_I18N_EN_US} from './components/guests/guest/components/other-services/i18n/other-services.i18n.en-US';
import {FOOD_TABLE_I18N_EN_US} from './components/guests/guest/components/food/food-table/i18n/food-table.i18n.en-US';
import {I18N_SELF_CHECK_IN_EN_US} from './i18n/app.i18n.en-US';

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
};
