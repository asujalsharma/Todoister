const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");
const list = require("../models/list");



//CREATE
router.post("/addtask",async (req,res)=>{

    try {
        const {title,body,id} = req.body;
        const existinguser = await User.findById(id)

    if(existinguser){

        const list = new List ({title,body,user: existinguser});
        await list.save().then(()=> res.status(200).json({list}));
        
        existinguser.list.push(list);
        existinguser.save();
    }
    } 
    catch (error) {
        console.log("error");  
    }
})


//UPDATE

router.put("/updatetask/:id",async (req,res)=>{

    try {
        const {title,body} = req.body;
        const list = await List.findByIdAndUpdate(req.params.id,{title,body});
        list.save().then(()=> res.status(200).json({message: "ho gya at last"}));
    } 
    catch (error) {
        console.log(error);  
    }
})

//DELETE

router.delete("/deletetask/:id",async (req,res)=>{

    try {
        const {id} = req.body;
        const existinguser = await User.findByIdAndUpdate(id ,{$pull: {list:req.params.id}});

    if(existinguser){

        const list = await List.findByIdAndDelete(req.params.id).then(()=> res.status(200).json({message: "kar diya delete"}))
    }
    } 
    catch (error) {
        console.log("error");  
    }
})


//get task


router.get("/gettask/:id",async (req,res)=>{

    try {
        const list = await List.find({user:req.params.id});
    if (list.length != 0 ){
        res.status(200).json({list});
    }
    else {
        res.status(200).json({message:"kuch kaam nhi h soja"});
    }
        
    } catch (error) {
        console.log(error);
        
    }

    
})


module.exports = router;