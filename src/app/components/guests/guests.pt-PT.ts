import{LfI18n} from "@lightweightform/core";
import { GUEST_I18N_PT } from "./components/guest/guest.pt-PT";
import { I18N_VALUE_LABEL_KEY } from "@lightweightform/bootstrap-theme";


export const GUESTS_I18N_PT = LfI18n.mergeTranslations({
    GUEST_I18N_PT,
    '/guests':{
        [I18N_VALUE_LABEL_KEY] : 'Hóspedes'
    },

});