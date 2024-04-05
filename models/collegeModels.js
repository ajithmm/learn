const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const userSchema = new Schema({
    college : {
        type:String,
        required : true,
    },

    city : {
        type:String,
        required : true,
    },
    usn : {
        type:String,
        required : true,
    }
})

const newr = mongoose.model('clg',userSchema);
module.exports= newr