import ButtonGreen from "../ButtonGreen";
import { BtnWhite, Container, GroupButton, GroupText, Section } from "./styles";

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
