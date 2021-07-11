require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('60e9c18e1bfaa214e8cf346e', { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
