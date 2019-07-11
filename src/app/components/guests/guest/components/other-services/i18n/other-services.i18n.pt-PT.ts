import {LfI18n} from '@lightweightform/core';
import {
  I18N_NUMBER_THOUSANDS_SEPARATOR_KEY,
  I18N_VALUE_LABEL_KEY,
} from '@lightweightform/bootstrap-theme';

export const OTHER_SERVICES_I18N_PT_PT = LfI18n.mergeTranslations({
  '/guests/?/otherServices': {
    displayInLine: true,
    [I18N_VALUE_LABEL_KEY]: 'Outros Serviços',
  },

  '/guests/?/otherServices/h1Radio': {
    [I18N_VALUE_LABEL_KEY]: 'Serviço de Lavandaria?',
    options: [{label: 'Sim', value: 'Y'}, {label: 'Não', value: 'N'}],
  },

  '/guests/?/otherServices/h2Radio': {
    [I18N_VALUE_LABEL_KEY]: 'Serviço Personal Trainer?',
    options: [{label: 'Sim', value: 'Y'}, {label: 'Não', value: 'N'}],
  },

  '/guests/?/otherServices/h3Number': {
    [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: '',
    [I18N_VALUE_LABEL_KEY]: 'Dias Com Personal Trainer:',
  },

  '/guests/?/otherServices/h4ComputedNumber': {
    [I18N_VALUE_LABEL_KEY]: 'Preço total dos treinos:',
    isDisabled: true,
    legend: 'Preço Total',
    decimalSeparator: ',',
    [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: '.',
    suffix: ' €',
  },
});
