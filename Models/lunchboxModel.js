const mongoose = require("mongoose");
const schema = mongoose.schema;

const lunchboxSchema = new schema({
    fullname : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true,
        unique : true
    },
    adress : {
        type : String
    }

})
module.exports = lunchBox = mongoose.model("lunchBox",lunchboxSchema);