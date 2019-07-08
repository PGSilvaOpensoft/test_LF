import { recordSchema, stringSchema, numberSchema} from "@lightweightform/storage";
import { LfStorage } from "@lightweightform/core";

export const otherServicesSchema = recordSchema(
    {
        h1Radio : stringSchema({
           initialValue : 'N',
        }),

        h2Radio : stringSchema({
            initialValue : 'N',
        }),

        h3Number : numberSchema({
            isRequired : asksForGymService,
            isNullable : true,
            min : 0,
        }),
    },{isForm: true,
       
    });

    function asksForGymService(ctx: LfStorage): boolean{
        const gymService = ctx.get('h2Radio');
       
        if(gymService == 'Y')
            return true;
        else
            return false;

    }
