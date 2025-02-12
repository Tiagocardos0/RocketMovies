import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        ::-webkit-scrollbar {
        width: 7px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 10px;
        
        }

        /* Cor e estilo do "polegar" (a parte que se move) */
        ::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.PINK_400};
            border-radius: 10px;
        }
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
        transition: filter 0.2s;
    }
`