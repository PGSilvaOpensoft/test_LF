import {
  recordSchema,
  stringSchema,
  dateSchema,
  numberSchema,
  ValidationIssue,
} from '@lightweightform/storage';
import {foodSchema} from './components/food/food.schema';
import {otherServicesSchema} from './components/other-services/other-services.schema';
import {LfStorage} from '@lightweightform/core';
import {moment} from 'ngx-bootstrap/chronos/test/chain';

export const guestSchema = recordSchema(
  {
    name: stringSchema({}),
    birthDate: dateSchema({
      isRequired: true,
      isNullable: true,
      validate: has18PlusYears,
    }),
    email: stringSchema({
      validate: emailValidator,
    }),
    phoneNumber: numberSchema({
      isNullable: true,
      min: 100000000,
    }),
    food: foodSchema,
    otherServices: otherServicesSchema,
  },
  {isForm: true},
);

function emailValidator(ctx: LfStorage): ValidationIssue | undefined {
  const email = ctx.get();
  let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  emailRegExp.test(email);
  if (!emailRegExp.test(email)) {
    return {
      code: 'INVALID_EMAIL',
    };
  }
}

function has18PlusYears(ctx: LfStorage): ValidationIssue | undefined {
  const birthDate: Date = ctx.get();
  const currDate: Date = new Date();
  if (moment(currDate).diff(moment(birthDate), 'years') < 18) {
    return {
      code: 'INVALID_AGE',
    };
  }
}
