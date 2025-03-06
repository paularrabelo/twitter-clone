import styled from "styled-components";
import { cores } from "../../styles";

export const HomeContainer = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${cores.preto};
`

export const Logo = styled.img`
    max-width: 450px;
    padding: 36px;
`

export const Formulario = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    width: 450px;
    height: 450px;
    background-color: ${cores.preto};
    border-radius: 8px;
    padding: 0 30px;
    color: ${cores.amarelo};

    h1 {
        font-size: 52px;
        font-weight: 100;
        margin-bottom: 16px;
    }

    h2 {
        font-size: 24px;
        font-weight: 100;
    }

    input {
        background-color: ${cores.branco};
        border: 2px solid ${cores.preto};
        border-radius: 4px;
        padding: 12px 15px;
        margin: 8px;
        width: 100%;

        &:focus {
            outline: none;
            border: 2px solid ${cores.amarelo};
        }
    }

    button {
        background-color: ${cores.amarelo};
        border: 1px solid ${cores.preto};
        border-radius: 4px;
        padding: 12px 15px;
        margin: 8px;
        width: 100%;
        color: ${cores.preto};
        font-weight: 700;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

        &:hover {
            background-color: ${cores.preto};
            color: ${cores.amarelo};
            border: 1px solid ${cores.amarelo};
        }  
    }

    .cadastrar {
        background-color: ${cores.preto};
        color: ${cores.amarelo};
        border: 1px solid ${cores.amarelo};

        &:hover {
            background-color: ${cores.amarelo};
            border: 1px solid ${cores.preto};
            color: ${cores.preto};
        }
    }

    p {
        font-weight: 200;
        font-size: 12px;

        a {
            cursor: pointer;
            transition: text-decoration-color 0.3s ease;

            &:hover {
                text-decoration: underline;
                text-decoration-color: ${cores.amarelo};
                text-decoration-thickness: 1px;
            }
        }
    }
`