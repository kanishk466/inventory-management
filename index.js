import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"

import dotenv from "dotenv"
const app = express();

import userRoutes  from'./routes/users.js';

import productRoutes from'./routes/products.js';

import categoryRoute from "./routes/category.js"


dotenv.config()

app.use(cors());
app.use(bodyParser.json());



// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    app.use('/api/users', userRoutes);
    app.use('/api/products', productRoutes);
    app.use('/api/category',categoryRoute);

    const port = process.env.PORT ;
app.listen(port, () => console.log(`Server running on port ${port}`));