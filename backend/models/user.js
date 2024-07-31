const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: {
        type:"string",
        required: true,
    },
    username: {
        type:"string",
    },
    password: {
        type:"string",
        required: true,
    },
    list:[{
        type: mongoose.Types.ObjectId,
        ref: "List"
    }]
})

module.exports = mongoose.model("User",userSchema); 