const router = require("express").Router();
const multer = require("multer");
const isAuth = require("../Middlewares/isAuth");
const isAdmin = require("../Middlewares/isAdmin");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Public/boxPictures");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const upload = multer({ storage: storage });

const boxes = require("../Models/boxModel");

// @route : http://localhost:5000/api/addbox
// add box
// private

router.post("/addbox", upload.single("BoxImage"), async (req, res) => {
  const { price, name, ingredient, madeby } = req.body;
  try {
    const newBox = new boxes({ price, name, ingredient, madeby });
    const Box = await newBox.save();
    res.json({ msg: "box saved", Box });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5000/api/lunch
// get boxes
// public


router.get("/lunch", isAuth, async (req, res) => {

  try {
    const box = await boxes.find();
    res.json({ msg: "boxes fetched", box });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5000/api/editbox/:_id
// edit box
// private

router.put("/editbox/:_id", isAuth, isAdmin, async (req, res) => {
  const { _id } = req.params;
  try {
    const boxedited = await box.findOneAndUpdate({ _id }, { $set: req.body });
    res.json({ msg: "box edited", boxedited });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5000/api/deletebox/:_id
// delete box
// private 

router.delete("/deletebox/:_id", isAuth, isAdmin, async (req, res) => {
  const { _id } = req.params;
  try {
    const boxdeleted = await box.findOneAndDelete({ _id });
    res.json({ msg: "box deleted", boxdeleted });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
