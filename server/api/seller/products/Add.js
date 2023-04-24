const Product = require("../../../schemas/Product");
const addProduct=async(req,res)=>{
    const product = new Product(req.body);
    try{
        const result = await product.save();
        res.json({success: true, data:result});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
}
module.exports = {addProduct};