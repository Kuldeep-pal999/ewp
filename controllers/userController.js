import User from "../model/User.js";



export const signup = async (req, res) => {
    try {
      const { name, email, password, phone,comment } = req.body;
  
      let existingUser;
      existingUser = await User.findOne({email});
      if(existingUser){
        return res.status(400).json({message:"this user is already exist"});
     }
      const hashedPassword = bcrypt.hashSync(password);
      const user = new User({
        name,
        email,
        password: hashedPassword,
        phone,
        comment,
      });
      await user.save();
      return res.status(201).json({ user });
    } catch (err) {
      return res.status(400).json({ message: "this user is already exist" });
    }
  };

