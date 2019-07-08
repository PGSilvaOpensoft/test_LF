import { recordSchema, stringSchema, numberSchema } from "@lightweightform/storage";
import { foodTableSchema } from "./food-table/food-table.schema";

export const foodSchema = recordSchema({
    ...foodTableSchema('breakfastTable'),
    ...foodTableSchema('lunchTable'),
    ...foodTableSchema('dinnerTable'),
    comments : stringSchema({
        textBox : true,
    }),
    totalPrice: numberSchema({
        computedValue : calcPrice(),
        isNullable : true,
        isInteger : false,
    }),
}, {isForm: true,
    });

function calcPrice() {
    return () => {return 0};
}