import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    phone_number: String,
    gst_number: String,
    address: String,
    city: String,
    state: String,
    country: String,
   
}, { timestamps: true });

export default mongoose.model('Supplier', supplierSchema);