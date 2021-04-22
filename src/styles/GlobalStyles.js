import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
     ${reset};
     @font-face {
        font-family:'sunflower';
        src: url('./src/font/sunflower.woff') format('woff'),
        url('./src/font/sunflower.ttf') format('truetype');
    }
     * {
        box-sizing: border-box;
      }
      body{
        background-color: #ffffff;
        font-family: "sunflower",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        line-height:1.4;
        color:${({theme}) => theme.colors.black};
        font-weight:bold;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      input, button {
        background-color: transparent;
        border: none;
        outline: none;
      }
      h1, h2, h3, h4, h5, h6, button, a{
        font-family:"sunflower", sans-serif;
      }
      ol, ul, li {
        list-style: none;
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
`;

export default GlobalStyles;