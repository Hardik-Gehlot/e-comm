const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    price: {type: Number,required: true},
    quantity:{type:Number,required:true},
    discount:{type:Number,required:true},
    original_price:{type:Number,required:true},
    images:[{type:String,required:true}],
    specification:{
        type:Map,of:String,required:true
    },
    seller: {
        id: { type: String, required: true },
        name: { type: String, required: true },
        type: { type: String, required: true }
    }
});

module.exports = mongoose.model('products', productSchema);
