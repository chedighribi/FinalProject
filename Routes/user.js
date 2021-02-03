const router = require('express').Router();


const users = require ('../Models/userModel');

router.post('/register', async (req,res)=>{
    const {fullname,email,password,phone,adress}= req.body;
    try {
        const newUser = new users ({
            fullname,
            email,
            password,
            phone,
            adress
        });
        const user = await newUser.save();
        res.json({msg:'user saved',user});
    } catch (error) {
        console.log(error)
    }
});



module.exports = router;
