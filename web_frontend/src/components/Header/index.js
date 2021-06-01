import React from 'react';
import * as Stl from './styles';
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header() {
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
        <a href="#" id="notification">
           <img src={bell} alt= "Notificação" />
            <span>5</span>

        </a>
        
    
        

      </Stl.RightSide>
    </Stl.Container>
  )
   
}

export default Header;