const mongoose = require('mongoose');
const optionsDate = { day: 'numeric', month: 'long', year: 'numeric' };
const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    address: [{
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: Number, required: true },
    }],
    wishlist: {
        type: [{
            productId: { type: String, required: true },
            name: { type: String, required: true },
            image: { type: String, required: true },
            category: { type: String, required: true },
            price: { type: Number, required: true },
            seller: { type: String, required: true },
            type: { type: String, required: true }
        }],
        default: []
    },
    cart: {
        type: [{
            productId: { type: String, required: true },
            name: { type: String, required: true },
            image: { type: String, required: true },
            category: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
            seller: { type: String, required: true },
            type: { type: String, required: true }
        }],
        default: []
    },
    createdAt: {
        date: { type: String },
        time: { type: String }
    }
});


// Add a pre-save hook to update the createdAt field
userSchema.pre('save', function (next) {
    const currentDate = new Date();
    this.createdAt.date = currentDate.toLocaleDateString('en-US', optionsDate);
    this.createdAt.time = currentDate.toLocaleTimeString('en-US', optionsTime);
    next();
});

module.exports = mongoose.model('users', userSchema);
