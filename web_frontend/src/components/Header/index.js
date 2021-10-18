import React from 'react';
import * as Stl from './styles';
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header({lateCount, clickNotification }) {
  return(
    <Stl.Container>
      <Stl.LeftSide>
        <img src={logo} alt="Logo Tarefa"/>
      </Stl.LeftSide>

      <Stl.RightSide>
       
        <a href="#">ÍNICIO</a>
        <span className= "divider"/>
        <a href="#">NOVA TAREFA</a>
        <span className= "divider"/>
        <a href="#">SINCRONIZAR CELULAR</a>
        <span className= "divider"/>


        <button onClick={clickNotification} id="notification">
           <img src={bell} alt= "Notificação" />
          <span>{lateCount}</span>
        </button>
        

      </Stl.RightSide>
    </Stl.Container>
  )
   
}

export default Header;