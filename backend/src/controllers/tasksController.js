const tasksData = require('../database/tasksData');

const getAll = async (req, res) => {
    const tasks = await tasksData.getAll();

    return res.status(200).json(tasks);
};

module.exports = {
    getAll
};