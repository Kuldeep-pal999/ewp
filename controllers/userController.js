import User from "../model/User.js";
import  nodemailer from "nodemailer";

import bodyParser from "body-parser";

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



  
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use the appropriate email service (e.g., Gmail, Outlook, etc.)
    auth: {
      user: "kuldeep.ewp@gmail.com", // Replace with your email address
      pass: "etruxeaawlxjkjkp", // Replace with your email password
    },
  });


  export const sendemail = async (req, res) =>{

  const { FullName, email,mobile,message,services ,company} = req.body;
   

    const Message1 = `${FullName} - ${message} - ${email} -${services} - ${mobile} - ${company}`;     
  
    const mailOptions = {
      from: email,
      to: "kuldeep.ewp@gmail.com",
      subject: "AWP",
      text: Message1,
      name: FullName,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent: " + info.response);
        res.send("Email sent successfully");
      }
    });

   
    const  Message = 'you have successfully registered';
    const mailOption = {
      from: "kuldeep.ewp@gmail.com",
      to: email,
      subject: "EWP",
      text: Message,
      name: FullName,
    };

     transporter.sendMail(mailOption, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent: " + info.response);
        res.send("Email sent successfully to User");
      }
    });
  }
  


