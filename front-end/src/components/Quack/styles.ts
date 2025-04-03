import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerQuack = styled.div`
    display: block;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 24px;
`
export const ContainerHeaderQuack = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
    margin-bottom: 16px;
`

export const ContainerContentQuack = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
`
export const ContainerInteracoesQuack = styled.label`
    display: block;
    position: relative;
    cursor: pointer;
    user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    svg {
        position: relative;
        top: 0;
        left: 0;
        height: 30px;
        width: 30px;
        transition: all 0.3s;
        fill: #666;
    }

    svg:hover {
        transform: scale(1.1);
    }

    input:checked ~ svg {
        fill: ${cores.amarelo} ;
    }

`

export const ImagemPerfilQuack = styled.img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
`

