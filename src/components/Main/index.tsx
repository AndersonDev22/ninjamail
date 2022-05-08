import styled from "styled-components";
import { Campaigns } from "../Campaigns";
import { Depositions } from "../Depositions";
import Footer from "../Footer";
import { GetStarted } from "../GetStarted";
import { Hero } from "../Hero/Hero";
import { LearnNow } from "../LearnNow";
import Navbar from "../Navbar";
import Partners from "../Partners";

const Container = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  width:90rem;
  height:0 auto;
  max-width:100%;
  background:transparent;

  @media (max-width: 768px) {
    width:48rem;
  }
`;

const MainContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  background: url("images/BGstuff.svg") no-repeat;
  background-size:100%;
  width:100%;
  height:165rem;
  max-width:90rem;
  margin-top:5rem;
`;

export default function MainLayout() {
  return (
    <Container>
      <Navbar />
      <MainContainer>
        <Hero />
        <LearnNow />
        <Campaigns />
        <Depositions />
      </MainContainer>
      <Partners />
      <GetStarted />
      <Footer />
    </Container>
  )
}
