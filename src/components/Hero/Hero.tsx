import styled from "styled-components";
import ButtonGreen from "../ButtonGreen";
import ButtonWhite from "../ButtonWhite";

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:42rem;
  max-width:90rem;
  background:transparent;

  @media (max-width: 768px) {
    width:768px;
    height:432px;
  }
`;

const Section = styled.section`
  background:url(images/hero.svg) no-repeat right;
  background-size:contain;
  display:flex;
  justify-content:space-between;
  width:72rem;
  height:28rem;
  max-width:100%;
`;

const GroupText = styled.div`
  padding:1rem;
  display:flex;
  justify-content:left;
  align-items:flex-start;
  flex-direction:column;

  h1{
    font-size:60px;
    font-weight:900;
    font-style:normal;
    line-height: 80px;
    font-family: 'Playfair Display';
  }

  h4{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 26px;
  }
`;

const GroupButton = styled.div`
  margin-top:0.2rem;
  display:flex;
  justify-content:center;
  flex-direction:column;
`;

export const Hero = () => {
  return (
    <Container>
      <Section>

        <GroupText>

          <h1>Create Stunning<br></br>Email Campaigns</h1>
          <h4>Create and launch email campaigns that captivate<br></br> your customers in just a few clicks.</h4>

          <GroupButton>
            <ButtonGreen text="TRY NOW" />
            <ButtonWhite text=" GET A DEMO" />
          </GroupButton>

        </GroupText>

       </Section>
    </Container>
  )
}
