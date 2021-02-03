const mongoose = require("mongoose");
const schema = mongoose.schema;

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
        required : true,
    },
    special : {
        type : String
    }
})
module.exports = lunch = mongoose.model("lunch",lunchSchema);