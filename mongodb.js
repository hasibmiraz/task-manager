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

    // db.collection('users')
    //   .deleteMany({ age: 26 })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection('tasks')
      .deleteOne({
        description: 'Jogging',
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
