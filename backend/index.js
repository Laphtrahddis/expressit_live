const express = require('express');
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors = require('cors')
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
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentRoute)




app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("Server is running on port at "+process.env.PORT)
})

