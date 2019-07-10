import {
  recordSchema,
  stringSchema,
  dateSchema,
  numberSchema,
  tableSchema,
} from '@lightweightform/storage';

export const foodTableSchema: (string) => object = path => {
  return {
    [path]: tableSchema(
      recordSchema({
        index: stringSchema({}),
        date: dateSchema({
          minDate: new Date(),
          isNullable: true,
        }),
        typeOfFood: stringSchema({
          isNullable: true,
          isRequired: true,
        }),
        price: numberSchema({
          isInteger: false,
          computedValue: computedPrice(),
          isNullable: true,
        }),
      }),
    ),
    [`subTotal${path}`]: numberSchema({
      isInteger: false,
      computedValue: subTotal(path),
      isNullable: true,
    }),
  };
};

function computedPrice() {
  return ctx => {
    let price;
    switch (ctx.get('typeOfFood')) {
      case 'meat':
        price = 8.3;
        break;
      case 'fish':
        price = 7.5;
        break;
      case 'vegan':
        price = 10.5;
        break;
      default:
        price = 0;
        break;
    }
    return price;
  };
}

function subTotal(path: string) {
  return ctx => {
    if (ctx.get(path).length > 0) {
      return ctx
        .get(path)
        .map(el => el.price)
        .reduce((acc, current) => acc + current);
    }
    return 0;
  };
}
