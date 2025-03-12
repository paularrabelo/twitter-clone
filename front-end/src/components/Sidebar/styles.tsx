import styled from 'styled-components'
import { cores } from '../../styles'

export const Aside = styled.aside`
  padding: 16px;
  height: 100vh;
  width: 400px;
  color: ${cores.branco};
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    color: ${cores.branco};
    padding-top: 24px;
`