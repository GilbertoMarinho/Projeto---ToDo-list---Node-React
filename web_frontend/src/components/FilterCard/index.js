import React from 'react';
import styled from 'styled-components';
import * as Stl from './styles';
import filterImage from '../../assets/filter.png'

//Resgata, por parâmetro, o título do card e se o card está selecionado no momento 
function FilterCard({title, actived}) {
  return(
      <Stl.Container actived = {actived}>
          <img src={filterImage} alt = "Filtro"/>
          <span>{title}</span>
      </Stl.Container>
  )
}

export default FilterCard;