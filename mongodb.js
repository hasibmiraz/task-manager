// CRUD
// DB : E:/web-dev-projects/Database/mongodb/bin/mongod.exe --dbpath=E:/web-dev-projects/Database/mongodb-data

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({ name: 'vikram' }, (error, user) => {
    //   if (error) {
    //     return console.log(`Unable to fetch`);
    //   }

    //   console.log(user);
    // });

    db.collection('users')
      .find({ age: 26 })
      .toArray((error, users) => {
        console.log(users);
      });

    db.collection('tasks').findOne(
      {
        _id: new ObjectID('60e892797b03e936ec77d031'),
      },
      (error, result) => {
        console.log(result);
      }
    );

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
