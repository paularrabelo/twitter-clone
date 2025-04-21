import styled from 'styled-components'
import { cores, fontes } from '../../styles'

export const BotaoMenu = styled.button`
    display: flex;
    align-items: center;
    width: 80%;
    height: 50px;
    border: none;
    border-radius: 15px;
    color: ${cores.branco};
    font-size: 24px;
    text-align: start;
    padding: 8px;
    cursor: pointer;
    font-family: ${fontes.principal};
    font-weight: 200;
    
    img {
        padding: 8px;
    }

    &.postar {
        justify-content: center;
        text-align: center;
        border: 1px solid ${cores.amarelo};
        background-color: ${cores.amarelo};
        color: ${cores.preto};
    }
`