const router = require('express').Router();


const tata = require ('../Models/tataModel');

router.post('/tataplus', async (req,res)=>{
    const {name,adress,phone,bio,speciality,goal}= req.body;
    try {
        const newTata = new tata ({
            name,
            adress,
            phone,
            bio,
            speciality,
            goal
        });
        const tatta = await newTata.save();
        res.json({msg:'tata saved',tatta});
    } catch (error) {
        console.log(error)
    }
});

router.get('/tata', async(req,res)=>{
    try {
        const tatas = await tata.find();
        res.json({msg:'tata fetched',tatas})
    } catch (error) {
        console.log(error)
    }
})


router.put('/edittata/:_id', async (req,res)=>{
    const {_id}= req.params;
    try {
        const tataedited = await tata.findOneAndUpdate({_id},{$set:req.body})
        res.json({msg:'tata edited', tataedited})
    } catch (error) {
        console.log(error)
    }
})

router.delete('deletetata/:_id', async (req,res)=>{
    const {_id}= req.params;
    try {
        const tatadeleted = await tata.findOneAndDelete({_id});
        res.json({msg:'tata deleted', tatadeleted})
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;