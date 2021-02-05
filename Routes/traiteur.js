const router = require('express').Router();


const traiteur = require ('../Models/traiteurModel');

router.post('/traiteur', async (req,res)=>{
    const {date, nPerson, adress, type}= req.body;
    try {
        const newTraiteur = new traiteur ({
            date,
            nPerson,
            adress,
            type
        });
        const traiteurs = await newTraiteur.save();
        res.json({msg:'request traiteur saved',traiteurs});
    } catch (error) {
        console.log(error)
    }
});

router.get('/traiteurrequest', async (req,res)=>{
    try {
        const Request = await traiteur.find();
        res.json({msg:'Request fetched',Request});
    } catch (error) {
        console.log(error)
    }
});

router.delete('/deleterequest/:_id', async(req,res)=>{
    const {_id}= req.params;
    try {
        const Requestdeleted = await traiteur.findOneAndDelete({_id});
        res.json({msg:'Request deleted', Requestdeleted})
    } catch (error) {
        console.log(error)
    }
        
})

module.exports = router;