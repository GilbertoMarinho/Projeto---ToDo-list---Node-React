//const { response } = require('express');
const TaskModel = require('../model/TaskModel');

const current = new Date();
const {startOfDay,
        endOfDay, 
        startOfWeek, 
        endOfWeek, 
        startOfMonth, 
        endOfMonth,
        startOfYear,
        endOfYear} = require('date-fns'); 

class TaskController{
    //Funções para trabalhar com os dados do mongo de forma assíncrona
   
    async create(req, res){
        const task = new TaskModel(req.body);
        await task
            .save() 
            .then(response =>{
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async update(req, res){
        await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true}) //new:true = devolver os dados da tarefa atualizada
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
           return res.status(500).json(error); 
        });
    }

    //retorna todas as tarefas para um determindado dispositivo(macaddress)
    async all(req, res){
        await TaskModel.find({macaddress: {'$in': req.body.macaddress}})
            .sort('when')
            .then(response => {
                return res.status(200).json(response); //devolve as tarefas em json
            })
            .catch(error=> {
                return res.status(500).json(error);
            });
    }

    //retorna uma tarefa a partir do id da tarefa
    async show(req, res){
        await TaskModel.findById(req.params.id)
        .then(response =>{
            if(response)
                return res.status(200).json(response);
            else
                return res.status(404).json({error: 'tarefa não encontrada'});    
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }


    async delete(req, res){
        await TaskModel.deleteOne({'_id': req.params.id})
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
        
    }

    //mudar status de uma tarefa para feito
    async done(req, res){
        await TaskModel.findByIdAndUpdate(
        {'_id': req.params.id}, //o que buscar
        {'done': req.params.done}, //o que atualizar
        {new: true}) // devolver no fim a tarefa com dados atualizados
         .then(response => {
             return res.status(200).json(response);
         })
         .catch(error => {
             return res.status(500).json(error);
         })
    }


    async late(req, res){
        await TaskModel.find({
            'when': {'$lt': current},
            'macaddress': {'$in': req.body.macaddress}
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response);            
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }


    async today(req, res){
        await TaskModel.find({
            'macaddress': {'$in': req.body.macaddress},
            'when': {'$gte': startOfDay(current), '$lt': endOfDay(current)} //gte maior ou igual que
        })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }


    async week(req, res){
        await TaskModel.find({
            'macaddress': {'$in': req.body.macaddress},
            'when': {'$gte': startOfWeek(current), '$lt': endOfWeek(current)} //gte maior ou igual que
        })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }


    async month(req, res){
        await TaskModel.find({
            'macaddress': {'$in': req.body.macaddress},
            'when': {'$gte': startOfMonth(current), '$lt': endOfMonth(current)} //gte maior ou igual que
        })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }


    async year(req, res){
        await TaskModel.find({
            'macaddress': {'$in': req.body.macaddress},
            'when': {'$gte': startOfYear(current), '$lt': endOfYear(current)} //gte maior ou igual que
        })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }






}


module.exports = new TaskController();
