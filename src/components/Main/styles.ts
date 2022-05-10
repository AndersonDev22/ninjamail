import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  width:1440px;
  height:3932px;
  max-width:1440px;
  background: url("images/Background.svg") no-repeat;
  background-size:100%;

  @media (max-width: 768px) {
    width:768px;
    height:2405px;
  }

  @media (max-width:320px) {
    width:320px;
    height:3483px;
    background-size:cover;
  }
`;

export const MainContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  width:100%;
  height:165rem;
  max-width:90rem;
  margin-top:5rem;

   @media (max-width: 768px) {
    width:768px;
    height:1728px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:2264px;
  }
`;
