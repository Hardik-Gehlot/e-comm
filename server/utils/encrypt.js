const bcrypt = require('bcrypt');

// Generate a salt with 10 rounds
const salt = bcrypt.genSaltSync(10);
function encrypt(pass) {
    // Hash the password with the salt
    const hashedPassword = bcrypt.hashSync(pass, salt);
    return hashedPassword;
}
module.exports = {encrypt};