import {recordSchema} from '@lightweightform/storage';
import {reservationDetailsSchema} from './components/reservation-details/reservation-details.schema';
import {guestsSchema} from './components/guests/guests.schema';

export const appSchema = recordSchema({
  reservationDetails: reservationDetailsSchema,
  guests: guestsSchema,
});
