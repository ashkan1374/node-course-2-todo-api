/*


let newTodo=new Todo({
    text: "Cook Dinner"
});

newTodo.save().then((doc)=>{
    console.log(`Saved todo : ${doc}`);
},(err)=>{
    console.log('Unable to save todo');
});



let newUser = new User({
    name: 'ashkan',
    email: 'ashkan1374@mail.com'
});

newUser.save().then((doc) => {
    console.log(`Saved user : ${doc}`);
}, (err) => {
    console.log('Unable to save user');
});


*/
const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndDelete(id).then((todo) => {
        if (!todo){
            return res.status(404).send();
        }
        res.status(200).send(todo);
    }).catch(e => {
        res.status(400).send(e);
    })

});


if (!module.parent) {
    app.listen(1000, () => {
        console.log('App is Running on Port 1000');
    });
}
module.exports = {app};