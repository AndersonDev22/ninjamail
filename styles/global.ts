import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    display:flex;
    justify-content:center;
    background:"#ffffff";
    color:"#000000";
  }
  `;
