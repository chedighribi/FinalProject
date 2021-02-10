const mongoose = require("mongoose");
const schema = mongoose.Schema;

const traiteurSchema = new schema({
    date : {
        type : Date,
        required : true,
    },
    nPerson : {
        type : Number,
        required : true
    },
    adress : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    
    type : {
        type : String,
        required : true,
    },
    special : {
        type : String,
    },

})
module.exports = traiteur = mongoose.model("traiteur",traiteurSchema);