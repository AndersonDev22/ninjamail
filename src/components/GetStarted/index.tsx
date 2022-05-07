import styled from "styled-components";
import ButtonWhite from "../ButtonWhite";

const Container = styled.div`
  background:#4ba87d;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:23rem;
  max-width:90rem;
  margin-top:8rem;
`;
const Section = styled.section`
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  width:59rem;
  height:32rem;
  max-width:100%;

  h1{
    color:#FFFFFF;
    font-size:60px;
    font-weight:900;
    font-style:normal;
    line-height: 80px;
    font-family: 'Playfair Display';
    margin-bottom:3rem;
    text-align: center;
  }
`;


export const GetStarted = () => {
  return (
    <Container>
      <Section>

        <h1>Reach More Customers</h1>
        <ButtonWhite text="PICK A PLAN"/>

      </Section>
      
    </Container>
  )
}