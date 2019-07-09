import{LfI18n} from "@lightweightform/core";
import{ I18N_NUMBER_THOUSANDS_SEPARATOR_KEY } from "@lightweightform/bootstrap-theme";

const myColumnLabels = {
    index: "#",
    date: "Data",
    typeOfFood: "Tipo de Refeição",
    price: "Preço",
};

export const FOOD_TABLE_I18N_PT =  LfI18n.mergeTranslations({
    '/guests/?/?/?':{
        columnLabels: myColumnLabels,
        addRowActionText: 'Adicionar Refeição',
        removeRowsActionText: 'Remover Refeição',
        noRowsText: 'Nenhuma refeição introduzida.',
    },

    '/guests/?/?/?/?/typeOfFood':{
        options : [
            {code: '1', value: 'meat', label: 'Carne'},
            {code: '2', value: 'fish', label: 'Peixe'},
            {code: '3', value: 'vegan', label: 'Vegetariano'},
          ],
    },

    '/guests/?/?/?/?/price':{
        decimalSeparator : ',',
        [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY] : ".",
        suffix : " €",
    },

    '/guests/?/?/subTotalbreakfastTable':{
        decimalSeparator : ',',
        [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY] : ".",
        suffix : " €",
    },
    '/guests/?/?/subTotallunchTable':{
        decimalSeparator : ',',
        [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY] : ".",
        suffix : " €",
    },
    '/guests/?/?/subTotaldinnerTable':{
        decimalSeparator : ',',
        [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY] : ".",
        suffix : " €",
    },

});