import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
    sale_date: {
        type: Date,
        default: Date.now
    },
    reference_no: String,
    biller: String,
    customer: String,
    order_tax: String,
    order_discount: Number,
    shipping: String,
    sale_status: String,
    payment_status: String,
    sale_note: String,
    total_price: Number,
    paid_amount: Number,
    
}, { timestamps: true });

export default mongoose.model('Sale', saleSchema);