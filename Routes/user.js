const router = require("express").Router();

const { registerRules, validator } = require("../Middlewares/validator");
const { find } = require("../Models/userModel");
const users = require("../Models/userModel");

// @route : http://localhost:5000/api/register
// user register
// public

router.post("/register", registerRules(), validator, async (req, res) => {
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

        // Create Salt & hash - mta3 el password na3mlouh lundi m3a b3adhna

    const user = await newUser.save();
    
    res.json({ msg: "user saved", user });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5000/api/users
// get all users
// public
router.get("/users", async (req, res) => {
  try {
    const allUsers = await users.find();
    res.json({ msg: "users fetched", allUsers });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5000/api/edituser/:_id
// edit user profile
// public
router.put("/edituser/:_id", registerRules(), validator, async (req, res) => {
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
// public
router.delete("/deleteuser/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const deletedUser = await users.findByIdAndDelete({ _id });
    res.json({ msg: "profile deleted", deletedUser });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
