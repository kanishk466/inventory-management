import express from "express"

const router = express.Router();



import User from "../models/User.js";

import bcrypt from "bcryptjs"

import jwt  from "jsonwebtoken"




// Register
router.post('/register', async (req, res) => {
    // const { user_name, password, role } = req.body;
    const user = new User({ ...req.body});
    try {
        await user.save();
        res.status(201).send('User registered');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Login
router.post('/login', async (req, res) => {
    const { user_name, password } = req.body;
    const user = await User.findOne({ user_name });
    if (!user) return res.status(400).send('Invalid username or password');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid username or password');

    const token = jwt.sign({ _id: user._id, role: user.role }, 'secretKey');
    res.header('Authorization', `Bearer ${token}`).send({ token ,user});
});

export default router;