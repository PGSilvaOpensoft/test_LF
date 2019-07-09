import {LfI18n} from '@lightweightform/core';
import {I18N_PT_PT} from '@lightweightform/core';

export const SOME_ERROR_OCCURRED_KEY = 'someErrorOccured';

export const I18N_SELF_CHECK_IN_PT = LfI18n.mergeTranslations(
  I18N_PT_PT,
  {
    '*': {
      appTitleLg: 'Check-in Automático',
      documentTitle: 'Check-in Automático',
      appTitleSm: 'Check-in Automático',
      actionsMenu: {
        save: 'Guardar',
        load: 'Carregar',
        validate: 'Validar',
        language: 'Idioma',
        submit: 'Submeter',
      },
      actionsMenuOptions: {
        language: {
          'en-US': 'Inglês',
          
          'pt-PT': 'Português',
        },
      },

    },
  },
);
