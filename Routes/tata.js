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



module.exports = router;