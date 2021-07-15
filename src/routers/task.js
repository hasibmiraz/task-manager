const express = require('express');
const router = new express.Router();
const Task = require('../models/task');

// Create New Task
router.post('/tasks', async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Fetch all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {
    res.status(500).send();
  }
});

// Fetch task by ID
router.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }

    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Update Tasks
router.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const updateFields = ['description', 'completed'];
  const validOperation = updates.every((update) =>
    updateFields.includes(update)
  );

  if (!validOperation) {
    return res.status(400).send({ error: 'Invalid request!' });
  }

  try {
    const task = await Task.findById(req.params.id);

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Delete Task
router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(505).send(e);
  }
});

module.exports = router;
