import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
const app = express();

import userRoutes  from'./routes/users.js';

import productRoutes from'./routes/products.js';

app.use(cors());
app.use(bodyParser.json());



// Connect to MongoDB
mongoose.connect('mongodb+srv://kanishksingh:Password%40123@cluster0.baolmn1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    app.use('/api/users', userRoutes);
    app.use('/api/products', productRoutes);

    const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));