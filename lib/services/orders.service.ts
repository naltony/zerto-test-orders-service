import { Document, Schema, Model, model } from 'mongoose';
import { Request } from 'express';
import { OrdersInterface } from "../interfaces/orders.interface";
import { OrdersSchema } from "../models/order.model";
import { OrdersUtils } from "../utils/ordersUtils";

export class OrdersService {

    private Order: Model<OrdersInterface> = model<OrdersInterface>('Orders', OrdersSchema);
    private static instance: OrdersService = new OrdersService();

    constructor() { }

    public static getInstance(): OrdersService {
        if (this.instance == undefined) {
            this.instance = new OrdersService();
        }
        return this.instance;
    }

    public createOrder(req: Request, callback) {
        let newOrder = new this.Order(req.body);

        OrdersUtils.validateOrder(newOrder);

        newOrder.save(callback);
    }

    public getOrderByID (orderId: string, callback) {
        this.Order.findById(orderId, callback);
    }

    public getAllOrders(callback) {
        this.Order.find({}, callback);
    }

    public updateOrder (orderId: string, order: OrdersInterface, callback) {
        this.Order.findOneAndUpdate({ _id: orderId }, order, callback);
    }

    public deleteOrder (orderId: string, callback) {
        this.Order.deleteOne({ _id: orderId }, callback);
    }

    public deleteOrdersByRestaurantId (restaurantId: string, callback) {
        this.Order.deleteOne({ restaurantId: restaurantId }, callback);
    }

}