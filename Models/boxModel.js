const mongoose = require("mongoose");
const schema = mongoose.Schema;

const boxSchema = new schema({
    price : {
        type : Number,
        required : true,
    },
    name : {
        type : String,
        required : true
    },
    ingredient : {
        type : String,
        required : true,
    },
    madeby : {
        type : String,
        required : true,
    },
    img : {
        type : String,
    }

    })
module.exports = box = mongoose.model("box",boxSchema);