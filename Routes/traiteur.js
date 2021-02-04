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

module.exports = router;