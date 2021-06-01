import styled from 'styled-components';

export const Container = styled.div` 
    width: 225px;
    height: 170px;
    border-radius: 5px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; //elementos um embaixo do outro
    
    margin: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        opacity: 0.5;
    }

    img{
        width:75px;
        height:75px;
    }

`

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; //elementos um embaixo do outro
`

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong{
        color: #EE6B26;
        font-weight: bold;
    }

    span{
        color: #707070;
    }

`



