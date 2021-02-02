//importing 
const mongoose = require('mongoose');
const config = require('config')

//connect db 
const connectDB = async ()=> {
    try {
        await mangoose.connect(config.get("MONGO URI"),{ useNewUrlParser : true, 
                                        useUnififiedTopology : true});
        console.log("Mongoose connected...")
    } catch (error) {
        console.log(error)
    }
};
module:exports = connectDB
