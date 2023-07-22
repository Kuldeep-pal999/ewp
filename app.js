import express from "express";
import mongoose from "mongoose";

const app = express();
 
app.use(express.json());


mongoose
  .connect(
    
    "mongodb+srv://Kuldeep:8eTgp95jyktXJgYb@cluster0.s0r0dnu.mongodb.net/InstiuteBackend?retryWrites=true&w=majority"
   //"mongodb+srv://admin:jnuXnAeFRAS6zMkq@cluster0.edvgza2.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err));
