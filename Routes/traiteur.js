const router = require('express').Router();
const isAuth = require("../Middlewares/isAuth");
const isAdmin = require ("../Middlewares/isAdmin");



const traiteur = require ('../Models/traiteurModel');

// @route : http://localhost:5000/api/traiteur
// add request
// public

router.post('/traiteur', async (req,res)=>{
    const {date, nPerson, adress, type, email, phone, special}= req.body;
    try {
        const newTraiteur = new traiteur ({
            date,
            nPerson,
            adress,
            type,
            email,
            phone,
            special
        });
        const traiteurs = await newTraiteur.save();
        res.json({msg:'request traiteur saved',traiteurs});
    } catch (error) {
        console.log(error)
    }
});

// @route : http://localhost:5000/api/traiteurrequest
// get traiteur request
// private

router.get('/traiteur' , async (req,res)=>{
    try {
        const Request = await traiteur.find();
        res.json({msg:'Request fetched',Request});
    } catch (error) {
        console.log(error)
    }
});

// @route : http://localhost:5000/api/deleterequest/:_id
// delete traiteur request
// private

router.delete('/deleterequest/:_id',isAuth, isAdmin, async(req,res)=>{
    const {_id}= req.params;
    try {
        const Requestdeleted = await traiteur.findOneAndDelete({_id});
        res.json({msg:'Request deleted', Requestdeleted})
    } catch (error) {
        console.log(error)
    }
        
})

module.exports = router;