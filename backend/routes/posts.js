const express=require('express');
const router=express.Router();
const User=require('../models/User')
const bcrypt=require('bcrypt') 
const Post=require('../models/Post')
const Comment=require('../models/Comment')


// CREATE
router.post("/create",async(req,res)=>{
    const newPost=new Post(req.body)
    try {
        const newPost=new Post(req)
        const savedPost=await newPost.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(200).json(error)
    }
})


// UPDATE
router.put("/:id",async(req,res)=>{
    try {
        
        const updatedUser=await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)
    }
    catch (error) {
        res.status(500).json(error)
    }  
})

// DELETE
router.delete("/:id",async(req,res)=>{
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json("Post has been deleted")
    }
    catch (error) {
        res.status(500).json(error)
    }  
})

// GET Post Details
router.get("/:id",async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id)
        res.status(200).json(post)
    }
    catch (error) {
        res.status(500).json(error)
    }  
})

// GET POSTS
router.get("/",async(req,res)=>{
    try {
        const posts=await Post.find()
        res.status(200).json(posts)
    }
    catch (error) {
        res.status(500).json(error)
    }  
})

// GET User POSTS
router.get("/:userId",async(req,res)=>{
    try {
        const posts=await Post.find({userId:req.params.userId})
        res.status(200).json(posts)
    }
    catch (error) {
        res.status(500).json(error)
    }  
})

module.exports=router