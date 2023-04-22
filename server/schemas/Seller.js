const mongoose = require('mongoose');
const optionsDate = { day: 'numeric', month: 'long', year: 'numeric' };
const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };

const sellerSchema = new mongoose.Schema({
    shopName: { type: String, required: true },
    owner: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {type:String, required:true},
    phone: { type: Number, required: true, unique: true },
    address: { type: String, required: true, unique: true },
    type: { type: String, default: "unknown" },
    createdAt: {
        date: { type: String },
        time: { type: String }
    }
});

// Add a pre-save hook to update the createdAt field
sellerSchema.pre('save', function(next) {
    const currentDate = new Date();
    this.createdAt.date = currentDate.toLocaleDateString('en-US', optionsDate);
    this.createdAt.time = currentDate.toLocaleTimeString('en-US', optionsTime);
    next();
});

module.exports = mongoose.model('sellers', sellerSchema);
