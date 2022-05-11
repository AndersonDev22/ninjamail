import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  width:100%;
  max-width:1440px;
  min-height:100vh;
  height:100%;
  background: url("images/Background.svg") no-repeat;
  background-size:100%;

  @media (max-width: 768px) {
    width:768px;
  }

  @media (max-width:320px) {
    width:320px;
    height:3483px;
    background-size:cover;
  }
`;
