import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
    }

    body {
        background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }

`