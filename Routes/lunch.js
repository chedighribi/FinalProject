const router = require('express').Router();
const isAuth = require("../Middlewares/isAuth");
const User = require ('../Models/userModel');
const jwt = require("jsonwebtoken");
const config = require("config");


const lunch = require ('../Models/lunchModel');

// @route : http://localhost:5000/api/lunch
// add order
// public

router.post('/lunch', async (req,res)=>{
    const {order,time, adress,phone, special,totalPrice,name}= req.body;
    const token = req.headers['auth-token'];  
    const decoded = await jwt.verify(token, config.get("SECRETKEY"));
    const user= await User.findById(decoded.id)
    try {
        const newLunch = new lunch ({
            name:user.name,
            time,
            adress:user.adress,
            phone:user.phone,
            special,
            totalPrice,
            order
            });
        const Lunch = await newLunch.save();
        res.json({msg:'order saved',Lunch});
    } catch (error) {
        console.log(error)
    }
});

// @route : http://localhost:5000/api/orders
// get orders
// private

router.get('/orders',  async(req,res)=>{
    
    try {
        const lunchs = await lunch.find();
        res.json({msg:'lunch fetched', lunchs})
    } catch (error) {
        console.log(error)
    }
})

router.get('/myorders',isAuth,  async(req,res)=>{
    const token = req.headers['auth-token'];  
    const decoded = await jwt.verify(token, config.get("SECRETKEY"));
    const user= await User.findById(decoded.id)
    console.log(user)
     try {
        const lunchs = await lunch.find({phone:user.phone});
        res.json({msg:'lunch fetched', lunchs})
    } catch (error) {
        console.log(error)
    }
})

// @route : http://localhost:5000/api/deleteorder
// delete order
// private


router.delete('/deleteorder/:_id', isAuth, async (req,res)=>{
    const {_id}= req.params;
    try {
        const lunchdeleted = await lunch.findOneAndDelete({_id});
        res.json({msg:'lunch deleted', lunchdeleted})
    } catch (error) {
        console.log(error)
    }
})



module.exports = router;
