import React from 'react';

import * as Stl from './styles';
import iconDefault from '../../assets/default.png'


function TaskCard() {
  return(
      <Stl.Container>
    
        <Stl.TopCard>
            <img src={iconDefault} alt="Ícone da tarefa"/>
            <h3>Título Padrão</h3>
        </Stl.TopCard>

        <Stl.BottomCard>
            <strong>01/01/2021</strong>
            <span> 00:00</span>
        </Stl.BottomCard>

      </Stl.Container>
  )
}

export default TaskCard;