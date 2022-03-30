// Author : Pavan Abburi
//This component is used to handle all the operations of user management
const express = require("express");
const app = express();
const User = require("../models/user.models");
const Otp = require("../models/otp.models");
const jwt = require('jsonwebtoken');
const sendMail = require('./email.contollers')
require("dotenv").config();

const register = async (req,res) => {
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            address:req.body.address
        });
        res.status(200).json({success: true});
    } catch (error) {
        console.log(error);
        res.status(400).json({success: false, error:error.message});
    }
};

const login = async (req,res) => {
    const user = await User.findOne({
        email:req.body.email,
        password:req.body.password
    })
    if(user){
        const token = jwt.sign({
            id:user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            address:user.address
        },
        process.env.TOKEN_SECRET_KEY
        )
        res.status(200).json({success: true, token:token,id:user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            address:user.address});
    }
    else{
        return res.status(400).json({success: false, message:'Credentials entered are wrong'})
    }
};

const getProfile = async (req,res) => {
    const userID = req.body.id;
    var query = {_id: userID};
    
    User.find(query).exec((err,result) => {
        if(err){
            res.status(400).json({success:false});
        }else if(!result || result.length<1){
            res.status(204).json({success:true,result:result});
        }
        else{
            res.status(200).json({success:true,result:result});
        }
    });
};

const updateProfile = async (req,res) => {
    const userID = req.body.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const address = req.body.address;

    const update = {
        _id:userID,
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
    };
    User.findByIdAndUpdate(userID,update,{},(err,result) => {
        if(err){
            return res.status(400).json({success:false});
        } else if(!result){
            return res.status(204).json({success:false});
        }
        else return res.status(200).json({success:true});
    });
};


const deleteProfile = async (req,res) => {
    const userID = req.body.id;
    console.log(userID)
    User.findByIdAndDelete(userID,(err,result) => {
        if(err){
            console.log(err)
            res.status(400).json({success:false});
        }else if(!result){
            return res.status(204).json({success:false});
        }else{
            return res.status(200).json({success:true});
        }
    })
};

const resetmail = async (req,res) => {
    const email = req.body.email;
    const user = await User.findOne({
        email:req.body.email
    })

    if(user){
        let otpcode = Math.floor((Math.random()*10000)+1);
        let otpData = new Otp({
            email:req.body.email,
            code:otpcode,
            expireIn: new Date().getTime()+300*1000
        })
        let otpResponse = await otpData.save()
        sendMail.sendMail(email,'Reset Password','hello'+otpcode,function(err, data) {
            if (err) {
                console.log('ERROR: ', err);
                return res.status(500).json({ message: err.message, success: false });
            }
            console.log('Email sent!!!');
            return res.status(200).json({ message: 'Email sent successfully', success: true });
        })
        res.status(200).json({success: true, message:'Please check your mail for otp'})
    }
    else{
        res.status(400).json({success: false,message:'Entered email is invalid'})
    }

};

const verifyOtp = async (req,res) => {
    const otp = req.body.otp
    console.log(otp.substring(5))
    const checkOtp = await Otp.findOne({
        email:req.body.email,
        code:otp.substring(5)
    })
    if(checkOtp){
        res.status(200).json({success: true,email:checkOtp.email})
    }
    else{
        res.status(400).json({success: false})
    }
};

const resetPassword = async (req,res) => {
    const email = req.body.email;
    const enteredPassword = req.body.password;

    const update = {
        password: enteredPassword
    };

    console.log(email)
    console.log(enteredPassword)

    User.findOneAndUpdate({email:email},{password:enteredPassword},{returnOriginal: false},(err,result) => {
        if(err){
            return res.status(400).json({success:false});
        } else if(!result){
            return res.status(204).json({success:false});
        } else{
            return res.status(200).json({success:true});
        }
    });
};

module.exports = {
    register,
    login,
    getProfile,
    updateProfile,
    deleteProfile,
    resetmail,
    verifyOtp,
    resetPassword
  };




