const Product = require("../../../schemas/Product");
const getProducts=async(req,res)=>{
    try{
        const result = await Product.find({'seller.id':req.body.id});
        res.json({success: true, data:result});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
}
module.exports = {getProducts};