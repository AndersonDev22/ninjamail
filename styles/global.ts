import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,500;0,800;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');
  }

  body{
    display:flex;
    justify-content:center;
    background:"#ffffff";
    color:"#000000";
  }
  `;
