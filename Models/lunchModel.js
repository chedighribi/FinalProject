const mongoose = require("mongoose");
const schema = mongoose.Schema;

const lunchSchema = new schema({
    time : {
        type : Date,
        default : Date.now()
    },
    name :{
        type : String
    },
    
    adress : {
        type : String,
        required : true
    },
    phone : {
        type : Number
    }
    ,
    special : {
        type : String
    },
    totalPrice : {
        type : Number,
        required : true
    }
})
module.exports = lunch = mongoose.model("lunch",lunchSchema);