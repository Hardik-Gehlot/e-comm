const bcrypt = require('bcrypt');
function compare(pass1,pass2) {
    if(bcrypt.compareSync(pass1,pass2)){
        return true
    }else{
        return false;
    }
}
module.exports = {compare};