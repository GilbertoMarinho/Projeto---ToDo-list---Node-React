const express = require('express');
const cors = require('cors');

const TaskRoutes = require('./routes/TaskRoutes');

const server = express();
server.use(cors()); //utilizando o cors para que outros projetos possam se conectar a nossa api
server.use(express.json());

//injetando arquivo TaskRoutes na api
server.use('/task', TaskRoutes);


server.listen(3001, () => {
    console.log('API ONLINE');
});
