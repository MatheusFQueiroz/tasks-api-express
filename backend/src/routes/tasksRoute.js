const express = require('express');
const tasksController = require('../controllers/tasksController');

const router = express.Router();

router.get('/tasks', tasksController.getAll);

router.post('/tasks/send', tasksController.validateDsTask, tasksController.createTask);

router.delete('/tasks/:id', tasksController.deleteTask);

router.put('/tasks/:id', tasksController.validateDsTask, tasksController.validateStTask, tasksController.updatedTask);

module.exports = router;