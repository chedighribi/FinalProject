const router = require("express").Router();
const { registerRules, validator, loginRules } = require("../Middlewares/validator");
const bcrypt = require('bcrypt');
const users = require("../Models/userModel");
const jwt = require('jsonwebtoken');
const config = require("config");
const isAuth = require("../Middlewares/isAuth");



// @route : http://localhost:5000/api/register
// user register
// public

router.post("/register" , registerRules(), validator, async (req, res) => {
  const { fullname, email, password, phone, adress } = req.body;
  try {
    // Check for existing user
    let newUser = await users.findOne({ email });
    if (newUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

     newUser = new users({
      fullname,
      email,
      password,
      phone,
      adress,
    });

        // Create Salt & hash 

        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);
        newUser.password = hashedPassword;

    const user = await newUser.save();
    
        // token
        const payload = {
          id: user._id,
        };
    
        const token = await jwt.sign(payload, config.get("SECRETKEY"));
    
    
    res.json({ msg: "user saved", user, token });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5000/api/login
// user login
// public

router.post("/login", loginRules(), validator, async(req, res)=>{
  const {email,password} = req.body;
  try {
        //Check user and password
    let user = await users.findOne({ email });
    if (!user) {
      return res.status(400).send({ msg: 'Wrong email' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ msg: 'Wrong password' });
    }

    // token
    const payload = {
      id: user._id,
    };

    const token = await jwt.sign(payload, config.get("SECRETKEY"));

    res.send({ msg: 'Logged in with success', user , token });

  } catch (error) {
    console.log(error);
  }
})

// @route : http://localhost:5000/api/users
// get all users
// private
router.get("/users",isAuth, async (req, res) => {
  try {
    const allUsers = await users.find();
    res.json({ msg: "users fetched", allUsers });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5000/api/edituser/:_id
// edit user profile
// private
router.put("/edituser/:_id", registerRules(), validator, isAuth , async (req, res) => {
  const { _id } = req.params;
  try {
    const editedUser = await users.findByIdAndUpdate(
      { _id },
      { $set: req.body },
      { new: true }
    );
    res.json({ msg: "profile updated", editedUser });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5000/api/deleteuser/:_id
// delete user
// private
router.delete("/deleteuser/:_id", isAuth , async (req, res) => {
  const { _id } = req.params;
  try {
    const deletedUser = await users.findByIdAndDelete({ _id });
    res.json({ msg: "profile deleted", deletedUser });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
