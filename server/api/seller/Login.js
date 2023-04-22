const Seller = require("../../schemas/Seller");
const {compare} = require("../../utils/compare")
const loginSeller=async(req,res)=>{
    const {email,password} = req.body;
    try{
        const seller = await Seller.findOne({email});
        if(!seller || !compare(password,seller.password)){
            return res.json({ loggedIn:false, message: 'Invalid email or password' });
        }
        seller.password = undefined;
        res.json({loggedIn: true, data:seller});
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
module.exports = {loginSeller};