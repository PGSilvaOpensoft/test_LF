import {LfI18n} from '@lightweightform/core';
import {I18N_VALUE_LABEL_KEY} from '@lightweightform/bootstrap-theme';

const myColumnLabels = {
  index: '#',
  roomType: 'Tipo de Quarto',
  cleaningService: 'Serviço de Limpeza',
  smoker: 'Fumador',
};

export const ACCOMODATION_I18N_PT_PT = LfI18n.mergeTranslations({
  '/reservationDetails/accomodation': {
    [I18N_VALUE_LABEL_KEY]: 'Estadia',
  },

  '/reservationDetails/accomodation/accomodationsTable': {
    columnLabels: myColumnLabels,
    addRowActionText: 'Adicionar Estadia',
    removeRowsActionText: 'Remover Estadia',
    noRowsText: 'Nenhuma estadia introduzida.',
  },

  '/reservationDetails/accomodation/accomodationsTable/?/roomType': {
    options: [
      {code: '1', value: 'single', label: 'Individual'},
      {code: '2', value: 'double', label: 'Duplo'},
      {code: '3', value: 'triple', label: 'Triplo'},
    ],
  },
});
