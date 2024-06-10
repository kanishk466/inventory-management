import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    purchase_date: {
        type: Date,
        default: Date.now
    },
    purchase_no: Number,
    supplier: String,
    received: String,
    order_tax: String,
    discount: String,
    shipping: String,
    payment: String,
    note: String,
    total_price: Number,
    paid_amount: Number
}, { timestamps: true });

export default mongoose.model('Purchase', purchaseSchema);