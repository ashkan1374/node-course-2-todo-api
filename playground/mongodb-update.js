const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

   /* db.collection('Todos').findOneAndUpdate(
        {_id: new ObjectID("5c9cc053d8f27d93c90931ac")},
        {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }
    ).then((result)=>{
       console.log(result);
    });
*/
   db.collection('Users').findOneAndUpdate({
       _id:new ObjectID("5c9ce5aed8f27d93c90934af")
   },{
       $inc:{
           age:24
       }
       ,$set:{
           name:"ashkan"
       }
   },{
       returnOriginal:false
   }).then((result)=>{
       console.log(result);
   });
    client.close();
});