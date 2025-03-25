const tasksData = require('../database/tasksData');

const getAll = async (req, res) => {
    const tasks = await tasksData.getAll();

    return res.status(200).json(tasks);
};

const validateBody = (req, res, next) => {
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

module.exports = {
    getAll, createTask, validateBody
};