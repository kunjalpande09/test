const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    name:String,
    email:String,
    pass:String
})

module.exports=mongoose.model("user", schema);