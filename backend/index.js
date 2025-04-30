const express = require('express');
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')

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
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)


app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("Server is running on port at "+process.env.PORT)
})

