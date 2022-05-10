import styled from "styled-components";
import Sec3 from "../Sec3";
import Sec4 from "../Sec4";
import Footer from "../Footer";
import GetStarted from "../GetStarted";
import { Hero } from "../Hero/Hero";
import Video from "../Video";
import Navbar from "../Navbar";
import Sec5 from "../Sec5";

const Container = styled.div`
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
    height:2565px;
  }

  @media (max-width:320px) {
    width:320px;
    height:3483px;
    background-size:cover;
  }
`;

const MainContainer = styled.div`
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
    height:2364px;
  }
`;

export default function MainLayout() {
  return (
    <Container>
      <Navbar />
      <MainContainer>
        <Hero />
        <Video />
        <Sec3 />
        <Sec4 />
      </MainContainer>
      <Sec5 />
      <GetStarted />
      <Footer />
    </Container>
  )
}
