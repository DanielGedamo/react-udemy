const mongoose = require ("mongoose")
 const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    email: {
        type:String,
        require: true,
        unique:true 

    },
    password:{
        type: String,
        require: true
    },
    avstar:{
        type:String
    },
    date:{
        type:date,
        default: Date.now
    }
 });
 module.exports = user = mongoose.model("user",userSchema)