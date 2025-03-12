import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerFeed = styled.div`
    width: 100%;
    display: flex;
`
export const ContentFeed = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${cores.branco};
    border-left: 1px solid ${cores.amarelo};
    border-right: 1px solid ${cores.amarelo};
`