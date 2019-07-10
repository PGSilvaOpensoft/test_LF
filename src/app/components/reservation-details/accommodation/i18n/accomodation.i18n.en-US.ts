import {LfI18n} from '@lightweightform/core';
import {I18N_VALUE_LABEL_KEY} from '@lightweightform/bootstrap-theme';

const myColumnLabels = {
  index: '#',
  roomType: 'Room Type',
  cleaningService: 'Cleaning Service',
  smoker: 'Smoker',
};

export const ACCOMODATION_I18N_EN_US = LfI18n.mergeTranslations({
  '/reservationDetails/accomodation': {
    [I18N_VALUE_LABEL_KEY]: 'Accomodation',
  },

  '/reservationDetails/accomodation/accomodationsTable': {
    columnLabels: myColumnLabels,
    addRowActionText: 'Add Accomodation',
    removeRowsActionText: 'Remove Accomodation',
    noRowsText: 'No Accomodations to show.',
  },

  '/reservationDetails/accomodation/accomodationsTable/?/roomType': {
    options: [
      {code: '1', value: 'single', label: 'Single'},
      {code: '2', value: 'double', label: 'Double'},
      {code: '3', value: 'triple', label: 'Triple'},
    ],
  },
});
