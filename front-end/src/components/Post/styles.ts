import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.div`
    width: 100%;
    min-height: 30%;
    height: auto;
    padding: 16px;
    display: flex;
    color: ${cores.branco};
    border-bottom: 1px solid ${cores.amarelo};
`;

export const FotoPerfil = styled.img`
    height: 80px;
    border-radius: 50%;
    margin-top: 24px;
`;

export const ContainerFoto = styled.div`
    width: 15%;
    display: flex;
    justify-content: center;
`;

export const ContainerContent = styled.div`
    width: 80%;
    margin: 24px;
`;

export const TextArea = styled.textarea`
    color: ${cores.branco};
    resize: none;
    border: none;
    font-size: 24px;
    width: 100%;
    min-height: 80px;
    padding: 8px;
    overflow: hidden;
    outline: none;
`;

export const BotoesIcone = styled.button`
    padding: 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const FileInput = styled.input`
    display: none;
`


export const PreviewContainer = styled.div`
    margin-top: 10px;
    position: relative;

    img, video {
        max-width: 100%;
        border-radius: 10px;
    }
`;

export const RemoveButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;

    &:hover {
        background: rgba(255, 0, 0, 0.8);
    }
`;

export const ContainerBotoesPost = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${cores.amarelo};
`

export const BotaoPostar = styled.button`
    margin-right: 16px;
    color: ${cores.preto};
    background-color: ${cores.amarelo};
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        color: ${cores.amarelo};
        border: 1px solid ${cores.amarelo};
        background-color: ${cores.preto};
    }
`