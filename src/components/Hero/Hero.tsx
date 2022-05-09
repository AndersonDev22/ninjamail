import styled from "styled-components";
import ButtonGreen from "../ButtonGreen";

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:1440px;
  height:3932px;
  max-width:1440px;

  @media (max-width: 768px) {
    width:768px;
    height:432px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:320px;
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

  @media (max-width: 768px) {
    width:711px;
    height:250px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:300px;
  }
`;

const GroupText = styled.div`

  padding:1rem;
  display:flex;
  justify-content:left;
  align-items:flex-start;
  flex-direction:column;

  @media (max-width: 768px) {
    width:330px;
    height:432px;
  }

  h1{
    font-size:60px;
    font-weight:900;
    font-style:normal;
    line-height: 80px;
    font-family: 'Playfair Display';

    @media (max-width: 768px) {
      font-size: 38px;
      line-height: 46px;
    }

  }

  h4{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 26px;

  @media (max-width: 768px) {
    font-size:12px;
    line-height: 16px;
  }
  }
`;

const GroupButton = styled.div`
  display:flex;
  margin-top:0.2rem;
  display:flex;
  justify-content:center;
  flex-direction:column;

  @media (max-width: 768px) {
    width:270px;
    font-size:12px;
    line-height: 16px;
    flex-direction:row;
    margin-top:20px;
  }
`;

const BtnWhite = styled.button`
  width: 12.5rem;
  height:4rem;
  background: #FFFFFF;
  color: #4ba87d;
  text-align:center;
  font-size:1.3rem;
  font-family: 'Raleway';
  font-weight: 900;
  line-height: 25px;
  letter-spacing: 1.05px;
  border:none;
  cursor: pointer;
  border: 2px solid #4ba87d;

  :hover{
    transition:0.3s;
    filter:brightness(0.9);
  }

  @media (max-width: 768px) {
    width:132px;
    height: 42px;
    font-size:13px;
    padding:0;
    border: 2px solid #4ba87d;
    margin-left:20px;

  }
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
            <BtnWhite>GET A DEMO</BtnWhite>
          </GroupButton>

        </GroupText>

       </Section>
    </Container>
  )
}
