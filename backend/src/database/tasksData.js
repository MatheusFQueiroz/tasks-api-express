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

  return { inserId: createdTask.insertId };
}

const deleteTask = async (id) => {
  const removedTask = await connection.execute('DELETE FROM tasks where cd_task = ?', [id]);

  return removedTask;
}

const updateTask = async (id, task) => {
  query = 'UPDATE tasks SET ds_task = ?, st_task = ?, dt_atualizacao = ? WHERE cd_task = ?';
  const { ds_task, st_task } = task;
  const now = new Date();
  const date = now.toISOString().slice(0, 19).replace('T', ' ');
  const updatedTask = await connection.execute(query, [ds_task, st_task, date, id]);

  return updatedTask;
}

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
};