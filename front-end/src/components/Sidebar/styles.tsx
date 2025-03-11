import styled from 'styled-components'
import { cores, fontes } from '../../styles'

export const Aside = styled.aside`
  padding: 16px;
  height: 100vh;
  width: 300px;
  border-right: 1px solid ${cores.amarelo};
  color: ${cores.branco};
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    color: ${cores.branco};
`

export const BotaoMenu = styled.button`
    width: 80%;
    height: 50px;
    border: 1px solid ${cores.amarelo};
    border-radius: 15px;
    color: ${cores.branco};
    font-size: 24px;
    align-content: center;
    text-align: start;
    padding: 8px;
    cursor: pointer;
    font-family: ${fontes.principal};
    font-weight: 200;
`