const express = require("express");
const connectDB = require("./Config/connectDB");
const multer = require("multer");

const app = express();

//middleware
app.use(express.json());

//connect DB
connectDB();

//routes
app.use("/api", require("./Routes/user"));
app.use("/api", require("./Routes/tata"));
app.use("/api", require("./Routes/lunch"));
app.use("/api", require("./Routes/box"));
app.use("/api", require("./Routes/traiteur"));
app.use("/api", require("./Routes/contactUs"));

//create a port
const port = process.env.PORT || 5000;

//launch the server
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port ${port}....`);
});
