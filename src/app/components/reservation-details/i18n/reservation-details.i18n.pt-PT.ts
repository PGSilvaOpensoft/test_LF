import {LfI18n} from '@lightweightform/core';
import {
  I18N_NUMBER_THOUSANDS_SEPARATOR_KEY,
  I18N_VALUE_LABEL_KEY,
} from '@lightweightform/bootstrap-theme';

export const RESERVATION_DETAILS_I18N_PT_PT = LfI18n.mergeTranslations({
  '/reservationDetails': {
    [I18N_VALUE_LABEL_KEY]: 'Detalhes da Reserva',
  },

  '/reservationDetails/email': {
    code: '1.1',
    [I18N_VALUE_LABEL_KEY]: 'E-mail',
    validations: {
      INVALID_EMAIL: 'O E-mail inserido não esta correto.',
    },
  },

  '/reservationDetails/phoneNumber': {
    [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: '',
    code: '1.2',
    [I18N_VALUE_LABEL_KEY]: 'Contacto Telefónico',
    minSize: 9,
  },

  '/reservationDetails/checkInOut': {
    code: '1.3',
    [I18N_VALUE_LABEL_KEY]: 'Entrada/Saída',
  },

  '/reservationDetails/hourOfArrival': {
    [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: '',
    code: '1.4',
    [I18N_VALUE_LABEL_KEY]: 'Hora de Chegada',
  },

  '/reservationDetails/flightNumber': {
    [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: '',
    code: '1.5',
    [I18N_VALUE_LABEL_KEY]: 'Número do Voo',
  },
});
