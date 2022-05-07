import styled from "styled-components";
import { Campaigns } from "../Campaigns";
import { Depositions } from "../Depositions";
import { GetStarted } from "../GetStarted";
import { Hero } from "../Hero/Hero";
import { LearnNow } from "../LearnNow";
import Partners from "../Partners";

const MainContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  background: url("images/BGstuff.svg") no-repeat;
  background-size:100%;
  width:100%;
  height:165rem;
  margin-top:6rem;
  max-width:90rem;
`;

const Container = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  width:100%;
  height:165rem;
  max-width:90rem;
  /* margin-top:6rem; */
`;
export default function MainLayout(){
  return (
    <Container>

    <MainContainer>
        <Hero/>
        <LearnNow/>
        <Campaigns/>
        <Depositions/>
    </MainContainer>
    <Partners/>
    <GetStarted/>
    </Container>
  )
}

// import Head from 'next/head'

// export default function Layout({children}: {
//   children: React.ReactNode

// }) {
//   return (
//     <>
//       <Head>
//         <title>Layouts Example</title>
//       </Head>
//       <main>{children}</main>
//     </>
//   )
// }
