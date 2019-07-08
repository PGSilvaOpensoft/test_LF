import{LfI18n, LfStorage} from "@lightweightform/core";
import { OTHER_SERVICES_I18N_EN_US } from "./other-services/other-services.en-US";
import { FOOD_I18N_EN_US } from "./food/food.en-US";
import { ValidationIssue } from "@lightweightform/storage";
import { I18N_NUMBER_THOUSANDS_SEPARATOR_KEY, I18N_VALUE_LABEL_KEY } from "@lightweightform/bootstrap-theme";

export const GUEST_I18N_EN_US = LfI18n.mergeTranslations({
    OTHER_SERVICES_I18N_EN_US,
    FOOD_I18N_EN_US,

    '/guests/?': {
        [I18N_VALUE_LABEL_KEY] : formListLabel,
    },

    '/guests/?/name':{
        [I18N_VALUE_LABEL_KEY]: 'Full Name',
    },

    '/guests/?/birthDate':{
        [I18N_VALUE_LABEL_KEY]: 'Date of Birth',
        validations: {
            INVALID_AGE: 'You need to have at least 18 years old to do you Self-Check-In.',
        },
    },

    '/guests/?/email':{
        [I18N_VALUE_LABEL_KEY]: 'E-mail:',
        validations: {
            INVALID_EMAIL: 'The E-mail is invalid.',
        },
    },

    '/guests/?/phoneNumber':{
        [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: "",
        [I18N_VALUE_LABEL_KEY]: 'Phone Number',
    },
});

function formListLabel(ctx: LfStorage): ValidationIssue | undefined{
    return ctx.get('name') === '' ? 'Guest' : ctx.get('name');
}