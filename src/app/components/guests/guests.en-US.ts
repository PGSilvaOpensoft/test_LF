import{LfI18n} from "@lightweightform/core";
import { GUEST_I18N_EN_US } from "./components/guest/guest.en-US";
import { I18N_VALUE_LABEL_KEY } from "@lightweightform/bootstrap-theme";

export const GUESTS_I18N_EN_US = LfI18n.mergeTranslations({
    GUEST_I18N_EN_US,
    '/guests':{
        [I18N_VALUE_LABEL_KEY] : "Guests"
    },

});