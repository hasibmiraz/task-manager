const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send(`GET requests are disabled`);
//   } else {
//     next();
//   }
// });

// app.use((req, res) => {
//   res.status(503).send('Site is currently down!');
// });

app.use(express.json());
app.use(userRouter, taskRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
  // const task = await Task.findById('60f1b8d48e526e03b0cb9f75');
  // await task.populate('owner').execPopulate();
  // console.log(task.owner);
  const user = await User.findById('60f1a86dba85883274444eb0');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks);
};

main();
