const Seller = require("../../schemas/Seller");
const {encrypt} = require("../../utils/encrypt")
const registerSeller=async(req,res)=>{
    const sell = req.body;
    sell.password = encrypt(sell.password);
    const seller = new Seller(sell);
    try{
        const result = await seller.save();
        res.json({loggedIn: true, data:result});
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
module.exports = {registerSeller};