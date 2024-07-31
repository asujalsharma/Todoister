const router = require("express").Router();
const User = require("../models/user");

//sign up
router.post("/register",async (req,res)=>{
    try {
        const {email, useranme, password } = req.body;
        const user = new User({email, useranme, password});

        await user.save().then(()=>
            res.status(200).json({message : "Signed Up Successfully"})
        )
        
    } catch (error) {
        res.status(200).json({message: "user already exists"});
    }
});

//sign in

router.post("/login",async (req,res)=>{
    try {
        const user = await User.findOne({ email: req.body.email});


        if (!user){
            res.status(200).json({message: "Sign up first"});
        }


        const pass = await User.findOne({ email: req.body.password});


        if (user.password != req.body.password){
            res.status(200).json({message: "Wrong password"});
        }

        if (user.password === req.body.password){
            const {password , ...others } = user._doc;
            res.status(200).json({others , message : "Login Successful"});
        }
        
    } catch (error) {
        res.status(200).json({message: "Kuch to Gadbad hai daya"});
    }
})


module.exports = router;