const router = require("express").Router();

const { find } = require("../Models/userModel");
const users = require("../Models/userModel");

// @route : http://localhost:5000/api/register
// user register
// public

router.post("/register", async (req, res) => {
  const { fullname, email, password, phone, adress } = req.body;
  try {
    const newUser = new users({
      fullname,
      email,
      password,
      phone,
      adress,
    });
    const user = await newUser.save();
    res.json({ msg: "user saved", user });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5000/api/users
// user register
// public
router.get("/users", async (req, res) => {
  try {
    const allUsers = await users.find();
    res.json({ msg: "users fetched", allUsers });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
