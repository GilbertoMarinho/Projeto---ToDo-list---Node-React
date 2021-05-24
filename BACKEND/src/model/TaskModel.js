//requerendo no módulo de database o mongoose já conectado
const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    macaddress: {type: String, required: true}, //endereço do dispositivo
    type: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    when: {type: Date, required: true},
    done: {type: Boolean, default: false},
    created: {type: Date, default: Date.now()} //data de criação da tarefa automática para data de agora
});

module.exports = mongoose.model('Task', TaskSchema);
