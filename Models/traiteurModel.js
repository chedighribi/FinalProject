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
    type : {
        type : String,
        required : true,
    },

})
module.exports = traiteur = mongoose.model("traiteur",traiteurSchema);