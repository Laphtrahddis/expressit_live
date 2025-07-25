const express = require('express');
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const cookieParser = require('cookie-parser')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute=require('./routes/posts')
const commentRoute=require('./routes/comments')


//database
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        
        console.log("Database connected successfully")
    } catch (error) {
        
        console.log(error.message)
        
    }
}

//middleware
dotenv.config()
app.use(express.json())
app.use("/images",express.static(path.join(__dirname,"/images"))) //for image upload
app.use(cors({
    origin: true, // or set to actual frontend domain when live
    credentials:true
}))
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentRoute)


//image upload
const storage=multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)
        // fn(null,"wallpaper.jpg")
    }
})
const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("Images has been uploaded successfully")
})




app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("Server is running on port at "+process.env.PORT)
})
