import express from "express"

const router = express.Router();
import Category from "../models/Category.js"


//GET all Category
router.get('/',  async (req, res) => {
    try {
        const category = await Category.find();
        res.json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new Category
router.post('/',  async (req, res) => {
    const category = new Category({
       ...req.body
    });

    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Update a  Category


router.put('/:id',async(req,res)=>{

    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Update the product fields with the new data
      
        category.code = req.body.code || category.code;
       
        category.category_name = req.body.category_name || product.category_name


        const updatedProduct = await category.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: err.message });
    }

})



// DELETE a Category
router.delete('/:id', async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted.");
      } catch (err) {
        next(err);
      }
});



export default router;