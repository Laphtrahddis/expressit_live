const mongoose = require('mongoose');  

const CommentSchema=new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    postId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("Comment",CommentSchema) //comment is the name of the collection in the database