import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import routeSkills from "../backend/routes/skills.js";

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin:true
}

app.get('/', (req, res)=>{
    res.send('Api is working')
})


// ---------- DATABASE CONNECTION ----------
mongoose.set('strictQuery', false)
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })
        
        console.log("MongoDB Connected")
    } catch(err){
        console.log("MongoDB Connection Failed")
    }
}

// ---------- MIDDLEWARE ----------
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/skills', routeSkills)


app.listen(port, ()=>{
    connectDB();
    console.log("Server is running " + port);
})