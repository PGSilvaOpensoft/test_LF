import {LfI18n} from '@lightweightform/core';
import {I18N_VALUE_LABEL_KEY} from '@lightweightform/bootstrap-theme';

export const FOOD_I18N_EN_US = LfI18n.mergeTranslations({
  '/guests/?/food': {
    [I18N_VALUE_LABEL_KEY]: 'Food',
  },

  '/guests/?/food/comments': {
    [I18N_VALUE_LABEL_KEY]:
      'Do you have additional comments? (allergies, food preferences, ...)',
  },
});
