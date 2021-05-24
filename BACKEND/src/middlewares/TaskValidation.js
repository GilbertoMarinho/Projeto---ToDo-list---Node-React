const TaskModel = require('../model/TaskModel');
const {isPast} = require('date-fns') //capturando função ispat com destructuring

const TaskValidation = async (req, res, next) => {

    //destructuring para seprar em variáveis individuais os atributos do objeto body que vem na requisição;    
    const {macaddress, type, title, description, when} = req.body;

    //validação dos atributos do body da requisição
    if(!macaddress)
        return res.status(400).json({error: 'Macaddress é obrigatório'}); //status code 400 = bad request
    else if(!type)
        return res.status(400).json({error: "Tipo é obrigatório"});
    else if(!title)
        return res.status(400).json({error: "Título é obrigatório"});
    else if(!description)
        return res.status(400).json({error: "Descrição é obrigatória"}); 
    else if(!when)
        return res.status(400).json({error: "Data e hora são obrigatórios"});
    else if(isPast(new Date(when)))
        return res.status(400).json({error: "Data e hora tem que ser futura"});
    else{
        let taskExists;
        if(req.params.id){ //validção de existência de tarefa para casos em que o id é passado como parâmetro na requisição
            /*para casos de update, 
            é importante validarmos duplicidade de horário para somente as tarefas que não vão ser atualizadas
            pois de outro modo não poderiamos atualizar uma tarefa mantendo o mesmo horário*/
            taskExists = await TaskModel.
                findOne({
                    '_id': {'$ne': req.params.id}, //ne = not equal
                    'when': {'$eq': new Date(when)}, //eq = equals
                    'macaddress': {'$in': macaddress} //in = contains
                })

        }else{ //validção de existência de tarefa para os outros casos
            taskExists = await TaskModel.
                                findOne({
                                    'when': {'$eq': new Date(when)}, //eq = equals
                                    'macaddress': {'$in': macaddress} //in = contains
                                })
        }

        if(taskExists){
            return res.status(400).json({error: 'Já existe uma tarefa agendada para esse dia e horário'});
        }

        next();
    }
};

module.exports = TaskValidation;