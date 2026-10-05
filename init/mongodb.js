const mongoose = require("mongoose");

const connectionUrl = "mongodb://localhost:27017/todoDb";

const connectMongodb=async ()=>{
    try{
       await mongoose.connect(connectionUrl);
       console.log("database connection successful")
        
    }catch(error){
        res.status(400).json({message:"COnnection failure"});
        process.exit(1)
    }
}

module.exports = connectMongodb;