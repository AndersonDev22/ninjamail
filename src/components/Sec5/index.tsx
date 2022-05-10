import Image from "next/image";

import LogoLastKnight from '../../../public/images/LogoLastKnight.svg'
import LogoDragonEye from '../../../public/images/LogoDragonEye.svg'
import LogoQuestai from '../../../public/images/LogoQuestai.svg'
import LogoRadioTee from '../../../public/images/LogoRadioTee.svg'
import LogoGameCommerce from '../../../public/images/LogoGameCommerce.svg'
import { Container, ContainerImage, GroupImage, Title } from "./styles";

export default function Sec5() {
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
