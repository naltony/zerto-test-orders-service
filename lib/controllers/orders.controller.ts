import { Document, Schema, Model, model } from 'mongoose';
import { Request, Response } from 'express';
import { OrdersService } from "../services/orders.service";

export class OrdersController {

    public ordersService: OrdersService;

    constructor() {
        this.ordersService = OrdersService.getInstance();
    }

    public addNewOrder(req: Request, res: Response) {

        this.ordersService.createOrder(req, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }

    public getOrders(req: Request, res: Response) {

        this.ordersService.getAllOrders((err, order) => {
            if(err){
                res.send(err);
            }
            res.json(order);
        });
    }

    public getOrderByID(req: Request, res: Response) {

        this.ordersService.getOrderByID(req.params.orderId, (err, order) => {
            if(err){
                res.send(err);
            }
            res.json(order);
        });
    }

    public updateOrder(req: Request, res: Response) {

        this.ordersService.updateOrder(req.params.orderId, req.body, (err, order) => {
            if(err){
                res.send(err);
            }
            res.json(order);
        });
    }

    public deleteOrder(req: Request, res: Response) {

        this.ordersService.deleteOrder(req.params.orderId, (err, order) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted order!'});
        });
    }

    public deleteOrdersByRestaurantId(req: Request, res: Response) {

        this.ordersService.deleteOrdersByRestaurantId(req.params.restaurantId, (err, order) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted order!'});
        });
    }

}