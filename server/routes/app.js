const { User } = require("../models");
const express = require('express')

const Router = express.Router()

const run = (req,res,next)=>{

    let newUser = {
        username:req.body.username,
        password :req.body.password,
        email:req.body.email

    }
    const user = new User(newUser)
    user.save().then(()=>{
        console.log("User Saved")
    })
    res.send({
        message:"User saved"
    })
    
}

Router.route("/guneet").post(run)





module.exports = Router