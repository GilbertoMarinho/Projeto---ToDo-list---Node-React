import React, {useState, useEffect} from 'react';
//importando arquivo Styles que trabalha diretamente com o modulo Styled-Component
import * as Stl from './styles';

//importando arquivo com configurações de conexão da api backend
import api from '../../services/api';

//Componentes criados no projeto
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard'


function Home() {
  //setFilterActived atualiza o valor do estado 'filterActived' para todos os componentes da página
  //useState() devolve: 1- um novo estado; 2- Função para alterar esse novo estado
  const [filterActived, setFilterActived] = useState('all'); //valor inicial do estado filterCard = 'all'
  const [tasks, setTasks] = useState([]); //estado será uma lista
  const [lateTaskCount, setLateTakCount] = useState();
  
  //Faz uma requisição ao backend carregando as tarefas da base para a constante de estado tasks
  async function loadTaks(){
      //A rota da api do backend que carrega as tasks para a aplicação é alterada pela variável de estado filterActived que armazena o tipo de filtro atual de tarefa mês, ano, tudo...
      await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
      .then(response => {
        setTasks(response.data);
      })
  }

  //carrega o número de tarefas atrasadas 
  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
      setLateTakCount(response.data.length);
    })
  }

  function showLate(){
    setFilterActived("late");
    console.log(filterActived);
  }


  //Sempre que a variável de estado filterActived for alterada, as funções loadTask e lateVerify são executadas
  useEffect(()=>{
    loadTaks();
    lateVerify();
  }, [filterActived])

  //renderizando componentes
  return (
    <Stl.Container>
      
      <Header lateCount = {lateTaskCount} clickNotification = {showLate}/>      
      
      {/*Lógica para repassar para o componente dos cards um booleano através da propriedade actived que diz qual card está selecionado no momento */}
      <Stl.FilterArea>  
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={filterActived == 'all'}  /> 
        </button>  
        
        <button type="button" onClick={() => setFilterActived("today")}> 
          <FilterCard title="Hoje" actived={filterActived == 'today'}/>
        </button> 
        
        <button type="button" onClick={() => setFilterActived("week")}>
        <FilterCard title="Semana" actived={filterActived == 'week'}  />
        </button>
        
        <button type="button" onClick={() => setFilterActived("month")} >
          <FilterCard title="Mês" actived={filterActived == 'month'} />
        </button>
        
        <button type="button" onClick={() => setFilterActived("year")} >
          <FilterCard title="Ano" actived={filterActived == 'year'} />
        </button>
      </Stl.FilterArea>  

      <Stl.Title>
        <h3>{filterActived == 'late' ? 'Tarefas Atrasadas' : 'Tarefas'}</h3>
      </Stl.Title>

      <Stl.Content>
        {
          tasks.map(task => (
          <TaskCard type={task.type} title={task.title} when={task.when} />
          ))
        }
      </Stl.Content>

      <Footer/>

    </Stl.Container>
    )
   
}
export default Home;
