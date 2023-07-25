import User from "../model/User.js";
import twilio from "twilio";


export const contactUs = async (req, res) => {
    try {
      const { FullName, email,mobile,message,services ,company} = req.body;
  
      let existingUser;
      existingUser = await User.findOne({email});
      if(existingUser){
        return res.status(400).json({message:"this user is already exist"});
     }
   
      const user = new User({
        FullName,
        email,
      
        mobile,
        message,
         services,
         company
      });
      await user.save();
      return res.status(201).json({ user });
    }
     catch (err) {
      return res.status(400).json({ message: "error" });
    }
  };

  


