const router = require('express').Router();


const lunch = require ('../Models/lunchModel');

router.post('/order', async (req,res)=>{
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



module.exports = router;
