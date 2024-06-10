import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    cost: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    tax_method: String,
    quantity: {
        type: String,
        default: 0
    },
    description: String,
    brand_name: String,
}, {
    timestamps: true,
});

export default mongoose.model('Product', ProductSchema);