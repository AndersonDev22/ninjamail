import styled from "styled-components";
import ButtonWhite from "../ButtonWhite";

const Container = styled.div`
  display:flex;
  width:1440px;
  height:3932px;
  max-width:1440px;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background:url(images/Video.svg) no-repeat center;
  background-size:contain;

  @media (max-width: 768px) {
    width:632px;
    height:432px;
    padding:70px;
    margin:0 68px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:175px;
    margin:40px 0;
  }

  h1{
    color:#FFFFFF;
    font-size:60px;
    font-weight:900;
    font-style:normal;
    line-height: 80px;
    font-family: 'Playfair Display';
    margin-bottom:3rem;

    @media (max-width: 768px) {
      font-size: 38px;
      line-height: 51px;
    }

    @media (max-width: 320px) {
      width:250px;
      font-size:22px;
      line-height: 29px;
    }
  }
`;

export const LearnNow = () => {
  return (
    <Container>

        <h1>Reach More Customers</h1>
        <ButtonWhite text="LEARN HOW"/>

    </Container>
  )
}
