const connection = require('./connection');

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');

  return tasks;
}

const createTask = async (task) => {
  const query = 'INSERT INTO tasks (ds_task, dt_criacao, st_task) VALUES (?, ?, ?)';
  const now = new Date();
  const date = now.toISOString().slice(0, 19).replace('T', ' ');
  const { ds_task } = task;

  const [createdTask] = await connection.execute(
    query, [ds_task, date, 'Pendente']
  )

  return {inserId: createdTask.insertId};
}

module.exports = {
    getAll,
    createTask,
};