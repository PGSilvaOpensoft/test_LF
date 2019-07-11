import {
  recordSchema,
  stringSchema,
  booleanSchema,
  tableSchema,
} from '@lightweightform/storage';

export const accomodationSchema = recordSchema({
  accomodationsTable: tableSchema(
    recordSchema({
      name: stringSchema({
        isRequired: true,
        isNullable: true,
        minLength: 2,
      }),

      roomType: stringSchema({
        isRequired: true,
        isNullable: true,
      }),

      cleaningService: booleanSchema({}),

      smoker: booleanSchema({}),
    }),
  ),
});
