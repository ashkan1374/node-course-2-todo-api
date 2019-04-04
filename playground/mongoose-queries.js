const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = "511ca0739b3041430ffc33cb9f";

if (!ObjectID.isValid(id)) {
    console.log('ID is not Valid !');
} else {
    User.findById(id).then((user) => {
        console.log(`User with this ${id}  Founded : ${user}`);
    }).catch((err) => {
        console.log(`User with this ${id} not Founded !`);
    });
}


/*
let id = "5ca61747e7ea2223b8fe3346";


Todo.find({
    _id:id
}).then((todos)=>{
    console.log('Todos :',todos);
});

Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log('Todo',todo);
});


Todo.findById(id).then((todo)=>{
   if (!todo){
       return console.log('ID Fot Found !');
   }
   console.log('ID Founded',todo);
}).catch(err=> console.log(err));
*/