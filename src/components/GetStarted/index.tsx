import styled from "styled-components";
import ButtonWhite from "../ButtonWhite";
// import Container from "../Container";

const Container = styled.div`
  background:#4ba87d;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  width:1440px;
  height:384px;
  max-width:100%;

  @media (max-width: 768px) {
    width:768px;
    height:257px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:310px;
  }

 h1{

    color:#FFFFFF;
    font-size:60px;
    font-weight:900;
    font-style:normal;
    line-height: 80px;
    font-family: 'Playfair Display';
    margin-bottom:1rem;

    @media (max-width: 768px) {
      font-size:42px;
      line-height: 51px;
    }

    @media (max-width: 3200px) {
      width:300px;
      font-size:45px;
      line-height:48px;
      margin-bottom:40px;
      text-align:center;
    }
  }
`;


export const GetStarted = () => {
  return (
    <Container>

        <h1>Get started today!</h1>
        <ButtonWhite text="PICK A PLAN"/>

    </Container>
  )
}
