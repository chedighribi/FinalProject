const router = require('express').Router();


const lunch = require ('../Models/lunchModel');

// @route : http://localhost:5000/api/lunch
// add order
// public

router.post('/lunch', async (req,res)=>{
    const {time, adress, phone, special}= req.body;
    try {
        const newLunch = new lunch ({
            time,
            adress,
            phone,
            special
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

router.get('/orders', async(req,res)=>{
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


router.delete('/deleteorder/:_id', async (req,res)=>{
    const {_id}= req.params;
    try {
        const lunchdeleted = await lunch.findOneAndDelete({_id});
        res.json({msg:'lunch deleted', lunchdeleted})
    } catch (error) {
        console.log(error)
    }
})



module.exports = router;
