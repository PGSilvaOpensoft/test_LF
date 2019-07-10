import{LfI18n} from "@lightweightform/core";

const myColumnLabels = {
    index: "#",
    date: "Date",
    typeOfFood: "Type of Food",
    price: "Price",
};

export const FOOD_TABLE_I18N_EN_US =  LfI18n.mergeTranslations({
    '/guests/?/?/?':{
        columnLabels: myColumnLabels,
        addRowActionText: 'Add Food',
        removeRowsActionText: 'Remove Food',
        noRowsText: 'No food added.',
    },

    '/guests/?/?/?/?/typeOfFood':{
        options : [
            {code: '1', value: 'meat', label: 'Meat'},
            {code: '2', value: 'fish', label: 'Fish'},
            {code: '3', value: 'vegan', label: 'Vegan'},
          ],
    },
});