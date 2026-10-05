const mongoose = require("mongoose");

const dotenv =require("dotenv");

dotenv.config();

const Url_here =process.env.connectionUrl

const connectMongodb=async ()=>{
    try{
       await mongoose.connect(Url_here);
       console.log("database connection successful")
        
    }catch(error){
        console.log(error.message);
        process.exit(1)
    }
}

module.exports = connectMongodb;