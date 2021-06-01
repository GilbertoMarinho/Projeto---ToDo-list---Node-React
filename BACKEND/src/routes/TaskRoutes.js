const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');


/*Exemplo de validação: Ao acessar a raiz de /task(verificar index), é executado em ordem:
1º TaskValidation que valida os dados do body da requisição
2º TaskController.create que cadastra uma nova tarefa no mongo utilizando os dados do body da requisição
Task.create só é chamado caso TaskValidation permitir*/ 

//router.verboRequisicao chamam funções de callback de acordo com a rota especificada, passando os dados da requisição(body, params...) como parâmetro para as calbacks 
router.post('/', TaskValidation, TaskController.create);
router.get('/:id', TaskController.show);
router.put('/:id', TaskValidation, TaskController.update); //primeiro parâmetro da url raiz de task = id
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);

router.get('/filter/all/:macaddress', TaskController.all);
router.get('/filter/late/:macaddress', TaskController.late);
router.get('/filter/today/:macaddress', TaskController.today);
router.get('/filter/week/:macaddress', TaskController.week);
router.get('/filter/month/:macaddress', TaskController.month);
router.get('/filter/year/:macaddress', TaskController.year);


module.exports = router;
