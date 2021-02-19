const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tataSchema = new schema({
    name : {
        type : String,
        required : true,
    },
    adress : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true,
    },
    bio : {
        type : String
    },
    speciality : {
        type : String
    },
    goal : {
        type : String
    },
    img : {
        type : String
    }
})
module.exports = tata = mongoose.model("tata",tataSchema);