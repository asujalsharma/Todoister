const mongoose = require("mongoose");
const conn = async(req,res)=>{
    try {
        await mongoose.connect("mongodb+srv://sujal:1234321@todo.4y7rsgc.mongodb.net/").then(()=>{
        console.log("connected !")
    })
    } catch (error) {
        console.log("this is the error",error);
        res.status(400).json({
            message: "not connected !!",
        })
        
    }

};

module.exports = conn;