const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    /*db.collection('Todos').find({completed: true}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos!', err);
    });
    */
    /*db.collection('Todos').find({
        _id: new ObjectID("5c9c9c17d8f27d93c9092ec6")}).count().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos!', err);
    });*/

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos Count : ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos!', err);
    });

    client.close();
});