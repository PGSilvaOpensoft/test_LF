import {tableSchema} from "@lightweightform/storage";
import { guestSchema } from "./components/guest/guest.schema";


export const guestsSchema  = tableSchema(guestSchema, {
     minSize:1})

        