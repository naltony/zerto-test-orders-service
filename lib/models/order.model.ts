import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const OrdersSchema = new Schema({
    username: {
        type: String,
        required: 'Enter a username'
    },
    restaurantId: {
        type: String,
        required: 'Enter a restaurant ID'
    },
    items: {
        type: Array,
    },
    'menu.$': {
        type: Object,
        label: 'A single order item',
    },
    'menu.$.name': {
        type: String,
        label: 'A single order item name',
    },
    'menu.$.id': {
        type: String,
        label: 'A single order item ID',
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});