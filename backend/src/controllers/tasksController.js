const { request } = require('express');
const tasksData = require('../database/tasksData');

const getAll = async (req, res) => {
    const tasks = await tasksData.getAll();

    return res.status(200).json(tasks);
};

const validateDsTask = (req, res, next) => {
    const { body } = req;

    if (body.ds_task === undefined) {
        return res.status(400).json({ message: `The field "ds_task" is required.` });
    }

    if (body.ds_task === '') {
        return res.status(400).json({ message: `The field "ds_task" cannot be empty.` });
    }

    next();
}

const createTask = async (req, res) => {
    const createdTask = await tasksData.createTask(req.body);

    return res.status(201).json(createdTask);
}

const deleteTask = async (req, res) => {
    const { id } = req.params;

    await tasksData.deleteTask(id);

    return res.status(204).json();
}

const validateStTask = (req, res, next) => {
    const { body } = req;

    if (body.st_task === undefined) {
        return res.status(400).json({ message: `The field "st_task" is required.` });
    }

    if (body.st_task === '') {
        return res.status(400).json({ message: `The field "st_task" cannot be empty.` });
    }

    next();
}

const updatedTask = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    await tasksData.updateTask(id, body);

    return res.status(200).json();
}

module.exports = {
    getAll, createTask, validateDsTask, deleteTask, validateStTask, updatedTask
};