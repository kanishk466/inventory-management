import mongoose from "mongoose";

const returnSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    reference_no: String,
    biller: String,
    customer: String,
    order_tax: String,
    order_discount: String,
    shipping: String,
    return_note: String,
  
}, { timestamps: true });

export default mongoose.model('Return', returnSchema);