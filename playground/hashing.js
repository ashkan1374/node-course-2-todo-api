const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
/*
let message = "i am user number 6";

let hash = SHA256(message).toString();

let data={
    id:4
};
let token={
    data,
    hash:SHA256(JSON.stringify(data)+'somesecret').toString()
};

let resultHash = SHA256(JSON.stringify(token.data)+'somesecret1').toString();

if (resultHash === token.hash){
    console.log('Data was not changed');
} else {
    console.log('Data was changed dont trust')
}
console.log(`Message : ${message}`);
console.log(`Hash : ${hash}`);
*/

/*let data ={
    id : 10
};

let token = jwt.sign(data,'1374Aa');
console.log(token);

let decoded = jwt.verify(token,'1374Aa');
console.log(`Decoded `,decoded);
*/

let password = "123abc!";

bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
        console.log(hash);
    });
});
let hashedPassword="$2a$10$HnxDWzRiUN./8zUi2rVu1u49HUSYHmRsNfLTkYN5l./NqzCZWAW7y";

bcrypt.compare(password,hashedPassword,(err,res)=>{
    console.log(res);
});