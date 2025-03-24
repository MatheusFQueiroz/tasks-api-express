const express = require('express');
const runningRoute = require('./routes/runningRoute');
const tasksRoute = require('./routes/tasksRoute');

const app = express();

app.use('/api', runningRoute);
app.use('/api', tasksRoute);

module.exports = app;