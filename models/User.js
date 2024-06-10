import mongoose from "mongoose";
import bcrypt from "bcryptjs"



const UserSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true
    },
    phone_number: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'active'
    },
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export default mongoose.model('User', UserSchema);