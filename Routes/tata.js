const router = require('express').Router();
const multer = require ("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './Public/Uploads');
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  
const upload = multer({storage: storage});


const tata = require ('../Models/tataModel');

// @route : http://localhost:5000/api/tataplus
// add tata
// private

router.post('/tataplus',upload.single("TataProfile"), async (req,res)=>{
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

// @route : http://localhost:5000/api/tata
// get tata list
// public

router.get('/tata', async(req,res)=>{
    try {
        const tatas = await tata.find();
        res.json({msg:'tata fetched',tatas})
    } catch (error) {
        console.log(error)
    }
})

// @route : http://localhost:5000/api/edittata/:_id
// edit tata profile
// private

router.put('/edittata/:_id', async (req,res)=>{
    const {_id}= req.params;
    try {
        const tataedited = await tata.findOneAndUpdate({_id},{$set:req.body})
        res.json({msg:'tata edited', tataedited})
    } catch (error) {
        console.log(error)
    }
})

// @route : http://localhost:5000/api/deletetata/:_id
// delete tata profile
// private

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