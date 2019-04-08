const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


/*
Todo.deleteOne({}).then((result) => {
  console.log(result);
});

Todo.findOneAndDelete({}).then((result) => {
    console.log(result);
});


Todo.findByIdAndDelete("5cab75ca7d5be918fd48e7ef").then((todo)=>{
   console.log(todo);
});
*/