import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 1px solid red;
}

body {
    background-color: #fdfdfd;
}

.container {
    border: 5px solid red !important;
}
`;
