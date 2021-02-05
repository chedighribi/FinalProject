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

router.get('/lunch' , async (req,res)=>{
    try {
        const box = await boxes.find();
        res.json({msg:'boxes fetched',box})
    } catch (error) {
        console.log(error)
    }
})

router.put('/editlunch/:_id' , async (req,res)=>{
    const {_id} = req.params;
    try {
        const boxedited = await box.findOneAndUpdate({_id}, {$set : req.body});
        res.json({msg:'box edited', boxedited})
    } catch (error) {
        console.log(error)
    }
})

router.delete('/deletebox/:_id', async(req,res)=>{
    const {_id}= req.params;
    try {
        const boxdeleted = await box.findOneAndDelete({_id});
        res.json({msg:'box deleted', boxdeleted})
    } catch (error) {
        console.log(error)
    }
        
})

module.exports = router;
