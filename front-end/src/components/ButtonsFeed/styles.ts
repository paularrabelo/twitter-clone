import styled from "styled-components";
import { cores } from "../../styles";
import { lighten } from "polished";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid ${cores.amarelo} ;
    width: 100%;
    height: 56px;
`
export const Botao = styled.div`
    color: ${cores.branco};
    cursor: pointer;
    text-align: center;
    align-content: center;
    font-weight: 200;
    font-size: 18px;
    padding: 8px;

    &:hover {
        background-color: ${lighten(0.1, cores.preto)};
    }
`