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

router.get('/lunch', async(req,res)=>{
    try {
        const lunchs = await lunch.find();
        res.json({msg:'lunch fetched', lunchs})
    } catch (error) {
        console.log(error)
    }
})

router.delete('/deletelunch/:_id', async (req,res)=>{
    const {_id}= req.params;
    try {
        const lunchdeleted = await lunch.findOneAndDelete({_id});
        res.json({msg:'lunch deleted', lunchdeleted})
    } catch (error) {
        console.log(error)
    }
})



module.exports = router;
