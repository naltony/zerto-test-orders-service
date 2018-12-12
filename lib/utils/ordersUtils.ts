import { OrdersInterface } from "../interfaces/orders.interface";
import { ValidationError } from "./validation.error";
import { ValidationResponse } from "./validation-response";

export class OrdersUtils {

    static validationErrorCodes = {
        2500: { msg: 'Missing user name' },

    }

    static validateOrder(order: OrdersInterface): boolean {

        if(order.username == undefined) {
            throw new ValidationError(this.validationErrorCodes[2500].msg,
                new ValidationResponse(false, 2500, this.validationErrorCodes[2500].msg));
        }

        return true;
    }
}