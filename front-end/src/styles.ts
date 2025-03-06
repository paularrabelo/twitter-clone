import { createGlobalStyle } from "styled-components";

export const cores = {
    preto: '#000000',
    amarelo: '#FFB22C',
    branco: '#F7F7F7',
    azul: '#98D8EF',
}

export const breakpoints = {
    desktop: '1024px',
    tablet: '768px',
    mobile: '767px'
}

export const fontes = {
    principal: '"Inter", sans-serif',
    titulo: '"Poppins", sans-serif',
    sistema: '"Source Code Pro", monospace',
}

export const GlobalCSS = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${fontes.principal};
        list-style: none;
        text-decoration: none;
    }

    .container{
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        padding: 0 16px;
    }
`

