import styled from "styled-components";
import ButtonWhite from "../ButtonWhite";
// import Container from "../Container";

const Container = styled.div`
  background:#4ba87d;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  width:100%;
  height:24rem;
  max-width:90rem;

  @media (max-width: 768px) {
    height: 15rem;

  }
`;

const Section = styled.section`
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  width:59rem;
  height:32rem;
  max-width:100%;

  @media (max-width: 768px) {

  }

  h1{
    color:#FFFFFF;
    font-size:60px;
    font-weight:900;
    font-style:normal;
    line-height: 80px;
    font-family: 'Playfair Display';
    margin-bottom:1rem;
    text-align: center;

    @media (max-width: 768px) {
    font-size:42px;
    }
  }
`;


export const GetStarted = () => {
  return (
    <Container>

      <Section>

        <h1>Get started today!</h1>
        <ButtonWhite text="PICK A PLAN"/>

      </Section>

    </Container>
  )
}
