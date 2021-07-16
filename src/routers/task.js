const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const Task = require('../models/task');

// Create New Task
router.post('/tasks', auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Fetch all tasks
router.get('/tasks', auth, async (req, res) => {
  try {
    await req.user.populate('tasks').execPopulate();

    res.send(req.user.tasks);
  } catch (e) {
    res.status(500).send();
  }
});

// Fetch task by ID
router.get('/tasks/:id', auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findOne({
      _id,
      owner: req.user._id,
    });

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Update Tasks
router.patch('/tasks/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const updateFields = ['description', 'completed'];
  const validOperation = updates.every((update) =>
    updateFields.includes(update)
  );

  if (!validOperation) {
    return res.status(400).send({ error: 'Invalid request!' });
  }

  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) {
      return res.status(404).send();
    }

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();

    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Delete Task
router.delete('/tasks/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(505).send(e);
  }
});

module.exports = router;
