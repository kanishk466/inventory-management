import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    phone_number: String,
    country: String,
    address: String,
    city: String,
    state: String,
    customer_group: String,
   
}, { timestamps: true });

export default mongoose.model('Customer', customerSchema);