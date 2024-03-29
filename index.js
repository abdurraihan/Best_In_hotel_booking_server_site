import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config()



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

app.get('/',(req,res)=>{
    res.send("Best In hotel booking server is running");
})

// middleware 
app.use(cookieParser());
app.use(express.json());


app.use("/api/auth",authRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);
app.use("/api/user",usersRoute);

// error handling 
app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500 ;
  const errorMessage = err.errorMessage || "something wrong "
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack: err.stack

  })
})


app.listen(7000, ()=>{
        connect();
    console.log('best In server is running ');
})