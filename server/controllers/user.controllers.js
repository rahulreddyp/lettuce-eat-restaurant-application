const express = require("express");
const app = express();
const User = require("../Models/user.models");
const jwt = require('jsonwebtoken');
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
        } else{
            return res.status(200).json({success:true});
        }
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

module.exports = {
    register,
    login,
    getProfile,
    updateProfile,
    deleteProfile,
  };




