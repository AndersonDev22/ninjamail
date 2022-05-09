import styled from "styled-components";
import Image from "next/image";

import LogoLastKnight from '../../../public/images/LogoLastKnight.svg'
import LogoDragonEye from '../../../public/images/LogoDragonEye.svg'
import LogoQuestai from '../../../public/images/LogoQuestai.svg'
import LogoRadioTee from '../../../public/images/LogoRadioTee.svg'
import LogoGameCommerce from '../../../public/images/LogoGameCommerce.svg'

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:90rem;
  height:24rem;
  max-width:100%;

  @media (max-width: 768px) {
    height: 17.6rem;
  }

  @media (max-width: 320px) {
    width:320px;
    height:500px;
    margin-bottom:20px;
  }
`;

const Title = styled.h1`
  width:30rem;
  text-align: center;
  font-size:44px;
  font-weight:900;
  font-style:normal;
  line-height: 48px;
  font-family: 'Playfair Display';
  margin:1rem;

  @media (max-width: 768px) {
    width:20rem;
    font-size:28px;
    line-height: 36px;
  }

  @media (max-width: 320px) {
    width:280px;
    font-size: 26px;
  }
`;

const GroupImage = styled.div`
  display:flex;
  justify-content:space-between;
  width:58rem;
  margin:2.4rem;
  max-width:100%;

  @media (max-width: 768px) {
    padding:0 20px;
    width:768px;
    height:257px;
  }

  @media (max-width: 320px) {
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width:280px;
  }
`;

const ContainerImage = styled.figure`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 3rem;
  margin:0 1rem;

  @media (max-width: 320px) {
  margin:15px 5px;
  }
`;



export default function Partners() {
  return (
    <Container>

      <Title>
        All the best brands
        already use us.
      </Title>

      <GroupImage>
        <ContainerImage>
          <Image
            src={LogoLastKnight}
            alt="Logomarca da Last Knight"
          />
        </ContainerImage>

        <ContainerImage>
          <Image
            src={LogoDragonEye}
            alt="Logomarca da Dragon Eye"
          />
        </ContainerImage>

        <ContainerImage>
          <Image
            src={LogoQuestai}
            alt="Logomarca da Quest ai"
          />
        </ContainerImage>

        <ContainerImage>
          <Image
            src={LogoRadioTee}
            alt="Logomarca da RadioTee"
          />
        </ContainerImage>

        <ContainerImage>
          <Image
            src={LogoGameCommerce}
            alt="Logomarca da GameCommerce"
          />
        </ContainerImage>

      </GroupImage>

    </Container>
  )
}
