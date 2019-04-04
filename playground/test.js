const {MongoClient, ObjectID} = require('mongodb');
const test = require('assert');
MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    db.collection('todos').insertOne({
        namelength()
    }).then((dbs) => {
        console.log(dbs);
    }, (err) => {
        console.log(err);
    });
    client.close();
});
