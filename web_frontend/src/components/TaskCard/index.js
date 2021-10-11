import React, {useMemo} from 'react';
import { format } from 'date-fns';

import * as Stl from './styles';
import iconDefault from '../../assets/default.png'


function TaskCard({type, title, when}) {
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy') );
  const hour = useMemo(() => format(new Date(when), 'HH:mm:ss'))
  return(
      <Stl.Container>
    
        <Stl.TopCard>
            <img src={iconDefault} alt="Ícone da tarefa"/>
            <h3>{title}</h3>
        </Stl.TopCard>

        <Stl.BottomCard>
            <strong>{date}</strong>
            <span>{hour}</span>
        </Stl.BottomCard>

      </Stl.Container>
  )
}

export default TaskCard;