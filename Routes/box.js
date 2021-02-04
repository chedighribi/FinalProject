const router = require('express').Router();


const boxes = require ('../Models/boxModel');

router.post('/box', async (req,res)=>{
    const {price, name, ingredient, madeby}= req.body;
    try {
        const newBox = new boxes ({
            price,
            name,
            ingredient,
            madeby
            });
        const Box = await newBox.save();
        res.json({msg:'box saved',Box});
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;
