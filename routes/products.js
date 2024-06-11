import express from "express"

const router = express.Router();

import Product from "../models/Product.js"




// GET all products
router.get('/',  async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new product
router.post('/',  async (req, res) => {
    const product = new Product({
       ...req.body
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});





router.put('/:id',async(req,res)=>{

    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Update the product fields with the new data
        product.name = req.body.name || product.name;
        product.code = req.body.code || product.code;
        product.tax_method = req.body.tax_method || product.tax_method;
        product.price =req.body.price || product.price
        product.cost =req.body.cost || product.cost
        product.quantity =req.body.quantity || product.quantity
        product.brand_name =req.body.brand_name || product.brand_name
        product.category_name = req.body.category_name || product.category_name


        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: err.message });
    }

})



// DELETE a product
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted.");
      } catch (err) {
        next(err);
      }
});





export default router;