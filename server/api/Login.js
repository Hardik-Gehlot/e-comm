const User = require("../schemas/User");
const {compare} = require("../utils/compare")
const login=async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user || !compare(password,user.password)){
            return res.json({ loggedIn:false, message: 'Invalid email or password' });
        }
        user.password = undefined;
        res.json({loggedIn: true, data:user});
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
module.exports = {login};