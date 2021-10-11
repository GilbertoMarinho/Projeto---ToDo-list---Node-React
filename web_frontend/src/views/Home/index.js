import React, {useState, useEffect} from 'react';
//importando arquivo Styles que trabalha diretamente com o modulo Styled-Component
import * as Stl from './styles';

//importando arquivo com configurações de conexão a api backend
import api from '../../services/api';

//Componentes criados no projeto
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard'


function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]); //estado será uma lista
  
  //A rota da api que carrega as task para a alicação é definida pela variável de estado filterActived que armazena o tipo de filtro atual de tarefa mês, ano, tudo...
  async function loadTaks(){
      await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
      .then(response => {
        setTasks(response.data);
      })
  }

  //Sempre que a variável de estado filterActived for alterada, a função loadTask é executada
  useEffect(()=>{
    loadTaks();
    console.log(filterActived);
  }, [filterActived])

  //renderizando componentes
  return (
    <Stl.Container>
      
      <Header/>      
      
      {/*Lógica para repassar para o componente dos cards um booleano que diz qual card está selecionado no momento */}
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
        <h3>TAREFAS</h3>
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
