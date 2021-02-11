const router = require("express").Router();
const { contactUsRules, validator } = require("../Middlewares/validator");
const contactUs = require("../Models/contactUsModel");
const isAuth = require("../Middlewares/isAuth");
const isAdmin = require("../Middlewares/isAdmin");

// @route : http://localhost:5000/api/contactus
// post contact-us
// public
router.post("/contactus", contactUsRules(), validator, async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  try {
    const newContactUs = new contactUs({
      firstName,
      lastName,
      email,
      phone,
      message,
    });
    const contact = await newContactUs.save();
    res.json({ msg: "message added", contact });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5000/api/allcontactus
// get all contact-us
// private
router.get("/allcontactus", isAuth, isAdmin, async (req, res) => {
  try {
    const allContactUs = await contactUs.find();
    res.json({ msg: "all contact us fetched", allContactUs });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
