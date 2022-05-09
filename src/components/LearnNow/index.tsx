import styled from "styled-components";
import ButtonWhite from "../ButtonWhite";

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:100%;
  height:42rem;
  max-width:90rem;
  background-color:transparent;

  @media (max-width: 768px) {
    width:768px;
    height:432px;
  }
  `;

const Section = styled.section`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
background:url(images/Video.svg) no-repeat center;
background-size:contain;
display:flex;
/* justify-content:space-between; */
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
  }
`;

export const LearnNow = () => {
  return (
    <Container>
      <Section>

        <h1>Reach More Customers</h1>
        <ButtonWhite text="LEARN HOW"/>

      </Section>

    </Container>
  )
}
