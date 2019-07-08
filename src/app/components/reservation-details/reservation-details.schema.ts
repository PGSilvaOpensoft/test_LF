import { recordSchema, stringSchema, numberSchema, ValidationIssue } from "@lightweightform/storage";
import { dateRangeSchema} from "@lightweightform/bootstrap-theme";
import { LfStorage } from "@lightweightform/core";
import { accomodationSchema } from "./components/accommodation/accomodation.schema";

export const reservationDetailsSchema = recordSchema(
   {
   email: stringSchema({
      validate: emailValidator,
      
   }),

   phoneNumber: numberSchema({
      isInteger : true,
      isRequired : true,
      isNullable : true,
      min: 100000000,
   }),
   

   checkInOut: dateRangeSchema({
      minDate : new Date(),
      isRequired : true,
      isNullable : true,
   }),

   hourOfArrival: numberSchema({
      min: 0,
      max:23,
      Required : true,
      isNullable : true,
   }),

   flightNumber: numberSchema({
      max : 1000000,
      Required : true,
      isNullable : true,
   }),
   
 
   accomodation : accomodationSchema,
   },
   {isForm:true,
});

 function emailValidator(ctx: LfStorage): ValidationIssue | undefined{    
      const email = ctx.get()
      let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegExp.test(email)) {
        return {
          code: 'Email is invalid'/*'INVALID_EMAIL'*/,
          message:
            'Email is invalid',
        }
      }
  }


