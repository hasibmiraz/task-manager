// CRUD
// DB : E:/web-dev-projects/Database/mongodb/bin/mongod.exe --dbpath=E:/web-dev-projects/Database/mongodb-data

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

console.log(id);
console.log(id.toHexString());

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
    //     _id: id,
    //     name: 'Vikram',
    //     age: 26,
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
