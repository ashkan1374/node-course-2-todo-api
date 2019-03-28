const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');


    //deleteMany
    /*db.collection('Todos').deleteMany({
        "text" : "suck cock",
        "completed" : false
    }).then((result)=>{
        console.log('All target deleted  successfully!',result);
    },(err)=>{
        console.log('There is no doc or happened error!');
    });*/

    //deleteOne
    /*db.collection('Todos').deleteOne({
        "text" : "Eat ass",
        "completed" : false
    }).then((result)=>{
        console.log(result);
    });
    */

    //findOneAndDelete
    /*
    db.collection('Todos').findOneAndDelete({

        "completed" : false
    }).then((results)=>{
       console.log(results);
    });
    */

    db.collection('Users').findOneAndDelete({_id:new ObjectID('5c9b8579b9ea6919489fc2a8')})
        .then((result)=>{
           console.log(result);
        });
    client.close();
});