import {
  recordSchema,
  stringSchema,
  numberSchema,
} from '@lightweightform/storage';
import {LfStorage} from '@lightweightform/core';
import {OtherServicesComponent} from './other-services.component';

export const otherServicesSchema = recordSchema(
  {
    h1Radio: stringSchema({
      initialValue: 'N',
    }),

    h2Radio: stringSchema({
      initialValue: 'N',
    }),

    h3Number: numberSchema({
      isRequired: asksForGymService,
      isNullable: true,
      min: 0,
    }),

    h4ComputedNumber: numberSchema({
      isNullable: true,
      computedValue: computedPrice,
    }),
  },
  {isForm: true},
);

function asksForGymService(ctx: LfStorage): boolean {
  const gymService = ctx.get('h2Radio');

  if (gymService == 'Y') return true;
  else return false;
}

function computedPrice(ctx: LfStorage): number {
  const gymServiceDays = ctx.get('h3Number');
  if (gymServiceDays == '') return 0;
  else return OtherServicesComponent.GYM_PRICE_PER_HOUR * gymServiceDays;
}
