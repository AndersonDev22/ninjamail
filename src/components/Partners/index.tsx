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
  width:100%;
  height:42rem;
  max-width:90rem;
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
`;

const GroupImage = styled.div`
  display:flex;
  justify-content:space-between;
  width:58rem;
  margin:2.4rem;


`;
export default function Partners() {
  return (
    <Container>

      <Title>
        All the best brands
        already use us.
      </Title>

      <GroupImage>
        <Image
          src={LogoLastKnight}
          alt="Logomarca da Last Knight"
        />

        <Image
          src={LogoDragonEye}
          alt="Logomarca da Dragon Eye"
        />

        <Image
          src={LogoQuestai}
          alt="Logomarca da Quest ai"
        />

        <Image
          src={LogoRadioTee}
          alt="Logomarca da RadioTee"
        />

        <Image
          src={LogoGameCommerce}
          alt="Logomarca da GameCommerce"
        />

      </GroupImage>

    </Container>
  )
}