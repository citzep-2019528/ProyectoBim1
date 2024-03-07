import { Schema, model } from "mongoose";

const cartSchema = Schema({
    client: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'product'
        },
        quantity:{
            type: Number,
            required: true,
            default: 1
        }
    }]
})

export default model('cart', cartSchema)