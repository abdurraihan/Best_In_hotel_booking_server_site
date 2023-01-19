import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();

dotenv.config();

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
            console.log("connected to mongoDB");
      } catch (error) {
        throw error;
      }
};

mongoose.connection.on('disconnected', () => {
    console.log("mongodb disconnected");
  });

// mongoose.connection.on('connected', () => {
//     console.log("mongodb connected");
//   });



app.listen(7000, ()=>{
        connect();
    console.log('best In server is running ');
})