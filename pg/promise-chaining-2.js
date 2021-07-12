require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndRemove('60eae655ad19c50fb8ff5245')
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  return await Task.countDocuments({ completed: false });
};

deleteTaskAndCount('60eae6a01cee5b15e4d6cc11')
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
