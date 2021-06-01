import styled from 'styled-components';

export const Container = styled.div`


`


export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    //flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;

    button {
        background: none;
        border: none;
    }

`
export const Content = styled.div` 
    width: 100%;
    display: flex;
    flex-wrap: wrap; //elementos quebram a linha quando não cabem na tela
    justify-content: center;
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #20295F;
    display: flex;
    justify-content: center;
    

    h3{
        color: #20295F;
        position: relative;
        top: 30px;
        background: #FFF;
        padding: 0 20px;
    }

    margin-bottom: 10px;

`
