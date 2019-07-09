import{LfI18n} from "@lightweightform/core";
import { FOOD_TABLE_I18N_PT } from "./food-table/food-table.pt-PT";
import { I18N_NUMBER_THOUSANDS_SEPARATOR_KEY, I18N_VALUE_LABEL_KEY } from "@lightweightform/bootstrap-theme";

export const FOOD_I18N_PT =  LfI18n.mergeTranslations({
     FOOD_TABLE_I18N_PT,
    
    '/guests/?/food':{
        [I18N_VALUE_LABEL_KEY]: "Refeições",
    },

   '/guests/?/food/comments':{
        [I18N_VALUE_LABEL_KEY]: "Tem algum comentário adicional? (alergias, preferências alimentares, ...)",
    },
    
    '/guests/?/food/totalPrice':{
        legend : "Preço Total",
        decimalSeparator : ",",
        [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY] : ".",
        suffix : " €",
    }  
});
