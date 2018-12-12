import { Request, Response } from "express";
import { OrdersController } from "../controllers/orders.controller";

export class Routes {

    public ordersController: OrdersController = new OrdersController();

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Service is up'
                })
            });

        // user
        app.route('/api/v1/orders')
        // GET endpoint
            .get(this.ordersController.getOrders)
            // POST endpoint
            .post(this.ordersController.addNewOrder);

        // Contact detail
        app.route('/api/v1/orders/:orderId')
        // get specific contact
            .get(this.ordersController.getOrderByID)
            .put(this.ordersController.updateOrder)
            .delete(this.ordersController.deleteOrder);

        app.route('/api/v1/orders/restaurant/:restaurantId')
            .delete(this.ordersController.deleteOrdersByRestaurantId);
    }
}