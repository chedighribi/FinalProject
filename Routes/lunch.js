const router = require('express').Router();
const isAuth = require("../Middlewares/isAuth");
const isAdmin = require ("../Middlewares/isAdmin");
const User = require ('../Models/userModel');
const jwt = require("jsonwebtoken");
const config = require("config");


const lunch = require ('../Models/lunchModel');

// @route : http://localhost:5000/api/lunch
// add order
// public

router.post('/lunch', async (req,res)=>{
    const {order,time, adress,phone, special,totalPrice,name}= req.body;
    
    try {
        const newLunch = new lunch ({
            name,
            time,
            adress,
            phone,
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

router.get('/orders', isAuth, isAdmin, async(req,res)=>{
    try {
        const lunchs = await lunch.find();
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
