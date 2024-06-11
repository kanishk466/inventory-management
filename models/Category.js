import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({

    category_name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },


})


export default mongoose.model('Category',CategorySchema);


