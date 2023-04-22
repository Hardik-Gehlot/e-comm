const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/E-comm';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(dbUrl, options)
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err));

module.exports = mongoose.connection;