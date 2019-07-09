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
        computedValue : totalPrice(),
        isNullable : true,
        isInteger : false,
    })
    
    
}, {isForm: true,
    });

    
function sumPrices(arr: any[]): number {
    if (arr === null) {
      return 0;
    }

    let sum = 0;
    for (const l of arr) {
      sum += l.price;
    }
    return sum;
}

function totalPrice() {
    return ctx => {
      const food = ctx.get();
      return (
        sumPrices(food.breakfastTable) +
        sumPrices(food.lunchTable) +
        sumPrices(food.dinnerTable)
      );
    };
}