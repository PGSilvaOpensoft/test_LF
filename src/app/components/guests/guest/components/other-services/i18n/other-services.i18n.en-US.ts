import {LfI18n} from '@lightweightform/core';
import {
  I18N_NUMBER_THOUSANDS_SEPARATOR_KEY,
  I18N_VALUE_LABEL_KEY,
} from '@lightweightform/bootstrap-theme';

export const OTHER_SERVICES_I18N_EN_US = LfI18n.mergeTranslations({
  '/guests/?/otherServices': {
    [I18N_VALUE_LABEL_KEY]: 'Other Services',
  },

  '/guests/?/otherServices/h1Radio': {
    [I18N_VALUE_LABEL_KEY]: 'Laundry Service?',
    options: [{label: 'Yes', value: 'Y'}, {label: 'No', value: 'N'}],
  },

  '/guests/?/otherServices/h2Radio': {
    [I18N_VALUE_LABEL_KEY]: 'Gym Service?',
    options: [{label: 'Yes', value: 'Y'}, {label: 'No', value: 'N'}],
  },

  '/guests/?/otherServices/h3Number': {
    [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: '',
    [I18N_VALUE_LABEL_KEY]: 'Days With Personal Trainer',
  },

  '/guests/?/otherServices/h4ComputedNumber': {
    [I18N_VALUE_LABEL_KEY]: 'Total Price',
    isDisabled: true,
    legend: 'Total Price',
    decimalSeparator: ',',
    [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: '.',
    suffix: ' $',
  },
});
