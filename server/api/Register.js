const User = require("../schemas/User");
const {encrypt} = require("../utils/encrypt")
const register=async(req,res)=>{
    const person = req.body;
    person.password = encrypt(person.password);
    const user = new User(person);
    try{
        const result = await user.save();
        res.json({loggedIn: true, data:result});
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
module.exports = {register};