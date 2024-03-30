import validator from "validator";
import User from "../models/Users.js";
import bcrypt from "bcrypt"
import  Jwt  from "jsonwebtoken"; 

const generateToken =(id)=>{
    return Jwt.sign({id}, process.env.Jwt_SECRET, {
        expiresIn:'3d'
    })
}
export const register = async (req, res) => {
    const {email,password} = req.body
    if(!email || ! password){
        return res.status(400).json({success: false , error:"please provide an email and password"})

    }
    if (!validator.isEmail(email)){

        return res.status(400).json({success: false , error:"please provide a valid email "})
    }
    if (!validator.isStrongPassword(password)){

        return res.status(400).json({success: false , error:"please provide a strong password "})
        }
    
    try{
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).json({success: false , error:"User already exist"})

        }
        // new user
        const salt = await bcrypt.genSalt(10)

        const hashedpassword = await bcrypt.hash(password,salt)

        const savedUser = await new User({
            email,
            password:hashedpassword,
        }).save()
        const token= generateToken(savedUser._id)
        res.status(200).json({success:true, token})


    }catch(error) { res.status(400).json({success: false , error: error.message})

    }

};
export const login = async (req, res) => {
    const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, error: "Please provide an email and password" });
  }

  if (!validator.isEmail(email)) {
    return res
      .status(400)
      .json({ success: false, error: "Please provide a valid email" });
  }

  try {
    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, userExists.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid credentials" });
    }

    const token = generateToken(userExists._id);

    res.status(200).json({ success: true, token,email });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }


}