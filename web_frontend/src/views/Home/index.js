import React, {useState} from 'react';

//importando arquivo Styles que trabalha diretamente com o modulo Styled-Component
import * as Stl from './styles';


//Componentes criados no projeto
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard'



function Home() {
  const [filterActived, setFilterActived] = useState();

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
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
      </Stl.Content>


      
      <Footer/>
    </Stl.Container>
    )
   
}

export default Home;
