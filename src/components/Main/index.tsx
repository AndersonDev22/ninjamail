import Sec3 from "../Sec3";
import Sec4 from "../Sec4";
import Footer from "../Footer";
import GetStarted from "../GetStarted";
import Hero from "../Hero/Hero";
import Video from "../Video";
import Navbar from "../Navbar";
import Sec5 from "../Sec5";
import { Container, MainContainer } from "./styles";

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
