import styled from "styled-components";
import { breakpoints, cores } from "../../styles";

export const HomeContainer = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${cores.preto};

    @media (max-width: ${breakpoints.mobile}) {
        margin: 0 auto;
        flex-direction: column;
        max-width: 100%;
    }
`;

export const Logo = styled.img`
    max-width: 350px;
    padding: 24px;

    @media (max-width: ${breakpoints.mobile}) {
        max-width: 50%;
        padding: 16px;
    }
`;

export const Formulario = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    background-color: ${cores.preto};
    border-radius: 8px;
    padding: 20px 30px;
    color: ${cores.amarelo};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    p {
        font-weight: 200;
        font-size: 12px;
        text-align: center;

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

    @media (max-width: ${breakpoints.mobile}) {
        max-width: 70%;
        padding: 0;
    }
`

export const Title = styled.h1`
    font-size: 42px;
    font-weight: 100;
    margin-bottom: 12px;
    color: ${cores.amarelo};

    &.medium {
        font-size: 20px;
        font-weight: 100;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 28px;

        &.medium {
            font-size: 18px;
        }
    }
`

export const Input = styled.input`
    background-color: ${cores.branco};
    border: 2px solid ${cores.preto};
    border-radius: 4px;
    padding: 10px 15px;
    margin: 6px 0;
    width: 100%;
    font-size: 16px;

    &:focus {
        outline: none;
        border: 2px solid ${cores.amarelo};
    }
`

export const Botao = styled.button`
    background-color: ${cores.amarelo};
    border: 1px solid ${cores.preto};
    border-radius: 4px;
    padding: 12px 15px;
    margin: 8px 0;
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

    &.cadastrar {
        background-color: ${cores.preto};
        color: ${cores.amarelo};
        border: 1px solid ${cores.amarelo};

        &:hover {
            background-color: ${cores.amarelo};
            border: 1px solid ${cores.preto};
            color: ${cores.preto};
        }
    }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  background-color: ${cores.preto};
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 3;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px;
  }
`

export const ModalContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 32px;
  gap: 16px;

  p {
    color: ${cores.amarelo};
  }
`

export const FoodTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.branco};
  line-height: 21.09px;
  display: block;
`
export const FoodDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.branco};
  line-height: 22px;
  width: 100%;
  margin: 16px 0 16px 0;
  p {
    margin-top: 16px;
  }
`
export const CloseIcon = styled.img`
  max-width: 16px;
  max-height: 16px;
  width: 100%;
  margin: 8px;
  cursor: pointer;
`