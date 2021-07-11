// E:/web-dev-projects/Database/mongodb/bin/mongod --dbpath=E:/web-dev-projects/Database/mongodb-data

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
