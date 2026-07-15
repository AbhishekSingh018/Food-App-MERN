const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");


const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);



app.get("/", (req,res)=>{
    res.send("Food App Backend Running");
});



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected");
})
.catch((error)=>{
    console.log(error);
});



app.listen(5000,()=>{

    console.log("Server running on port 5000");

});