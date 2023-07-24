import User from "../model/User.js";
import twilio from "twilio";


export const signup = async (req, res) => {
    try {
      const { FullName, email, company, mobile,message } = req.body;
  
      let existingUser;
      existingUser = await User.findOne({email});
      if(existingUser){
        return res.status(400).json({message:"this user is already exist"});
     }
    //  const hashedPassword = bcrypt.hashSync(password);
      const user = new User({
        FullName,
        email,
      //  password: hashedPassword,
        mobile,
        message,
        services
      });
      await user.save();
      return res.status(201).json({ user });
    } catch (err) {
      return res.status(400).json({ message: "this user is already exist" });
    }
  };

  


const accountSid = "AC8af3cee6e9b48bc5231528e9179f8630";
const authToken = "26c7b5904b83f12c2039f330694721e6";
const twilioClient = twilio(accountSid, authToken);

export const submit = async (req, res) => {
  try {
    const {FullName,
        email,
        mobile,
        company,
        message,
        services
         } = req.body;

    
    const formData = new User({
        FullName,
        email,
        mobile,
        company,
        message,
        services,
    });
    
   
    await formData.save();
    const smsMessage = `New form submission from ${name} - Email: ${email}, Mobile: ${mobile}, City: ${password}, Option: ${comment}`;
    await twilioClient.messages.create({
      body: smsMessage,
      from: "+18146662447", 
      to: "+919548430311", 
    });
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to submit form" });
  }
};

