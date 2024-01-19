import mysql from 'mysql2';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

// create the connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
});


const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = (email, password, usernames) => {
    let hashPass = hashUserPassword(password);
    connection.query(
        'INSERT INTO user(email, password, username) VALUES(?,?,?)', [email, hashPass, usernames],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            console.log(results);
        }
    );
}
const getUserList = () => {
    let users = [];
    connection.query(
        'Select* from user',
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            console.log("check results", results);
        }
    );
}
module.exports = {
    createNewUser, getUserList
}