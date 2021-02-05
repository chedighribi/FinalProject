const mongoose = require("mongoose");
const schema = mongoose.Schema;

const lunchSchema = new schema({
    time : {
        type : Date,
        required : true,
    },
    adress : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    special : {
        type : String
    },
    totalPrice : {
        type : Number,
        required : true
    }
})
module.exports = lunch = mongoose.model("lunch",lunchSchema);