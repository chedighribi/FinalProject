const mongoose = require("mongoose");
const schema = mongoose.Schema;

const lunchSchema = new schema({
    time : {
        type : Date,
        default : Date.now()
    },
    name :{
        type : String,
        
    },
    
    adress : {
        type : String,
    },
    phone : {
        type : Number,
        
    }
    ,
    special : {
        type : String
    },
    totalPrice : {
        type : Number,
        required : true
    },
    order : [{}]
})
module.exports = lunch = mongoose.model("lunch",lunchSchema);