import{LfI18n} from "@lightweightform/core";
import { ACCOMODATION_I18N_EN_US } from "./components/accommodation/accomodation.en-US";
import { I18N_NUMBER_THOUSANDS_SEPARATOR_KEY, I18N_VALUE_LABEL_KEY } from "@lightweightform/bootstrap-theme";

export const RESERVATION_DETAILS_I18N_EN_US = LfI18n.mergeTranslations({
  ACCOMODATION_I18N_EN_US,
    '/reservationDetails': {
        [I18N_VALUE_LABEL_KEY] : "Reservation Details",
    },

    '/reservationDetails/email': {
      code : "1.1",
      [I18N_VALUE_LABEL_KEY]: "E-mail",
      validations: {
        INVALID_EMAIL: 'The E-mail is invalid.',
      },
    },

    '/reservationDetails/phoneNumber': {
      code : "1.2",
      [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: "",
      [I18N_VALUE_LABEL_KEY]: "Phone Number",
    },

    '/reservationDetails/checkInOut': {
      code : "1.3",
      [I18N_VALUE_LABEL_KEY]: "Check-In/Check-Out",
    },

    '/reservationDetails/hourOfArrival': {
      code : "1.4",
      [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: "",
      [I18N_VALUE_LABEL_KEY]: "Hour of Arrival",
    },

    '/reservationDetails/flightNumber': {
      code : "1.5",
      [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: "",
      [I18N_VALUE_LABEL_KEY]: "Flight Number",
    },
});