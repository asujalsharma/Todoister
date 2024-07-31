const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({
    title: {
        type:"string",
        required: true,
    },
    body:{
        type:"string",
    },
    user:[{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }]
},
{timestamps:true}
)

module.exports = mongoose.model("List",listSchema); 