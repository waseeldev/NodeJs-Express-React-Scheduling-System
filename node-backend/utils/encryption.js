const bcrypt = require('bcryptjs');

// Function to encrypt password
function encryptPassword(password) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                reject('Cannot generate salt');
                return;
            }
            
            bcrypt.hash(password, salt, function (err, hash) {
                if (err) {
                    reject('Cannot encrypt');
                    return;
                }
                resolve(hash);
            });
        });
    });
}

// Function to compare password with hashed password
function comparePasswords(password, hashedPassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashedPassword, function (err, isMatch) {
            if (err) {
                reject('Cannot compare passwords');
                return;
            }
            resolve(isMatch);
        });
    });

}

module.exports = { comparePasswords, encryptPassword };
