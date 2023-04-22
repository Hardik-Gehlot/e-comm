const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String, required: true }],
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    seller:{
        id:{type:String,required:true},
        name:{type:String,required:true},
        type:{type:String,required:true}
    }
});

module.exports = mongoose.model('products', productSchema);
