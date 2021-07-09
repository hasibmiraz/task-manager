// CRUD
// DB : E:/web-dev-projects/Database/mongodb/bin/mongod.exe --dbpath=E:/web-dev-projects/Database/mongodb-data

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

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

    // db.collection('users').insertOne(
    //   {
    //     name: 'Miraz',
    //     age: 23,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log(`Unable to inser user`);
    //     }

    //     console.log(result.insertedCount);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Jen',
    //       age: 28,
    //     },
    //     {
    //       name: 'Gunther',
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log(`Unable to insert user`);
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'Jogging',
    //       completed: true,
    //     },
    //     {
    //       description: 'Breakfast',
    //       completed: false,
    //     },
    //     {
    //       description: 'Lunch',
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log(`Unable to connect to database`);
    //     }

    //     console.log(result.ops);
    //   }
    // );
  }
);
