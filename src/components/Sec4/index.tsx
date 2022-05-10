import Image from "next/image";
import PhotoMrChef from '../../../public/images/PhotoMrChef.svg'
import PhotoPlanter from '../../../public/images/PhotoPlanter.svg'
import PhotoHappyWoman from '../../../public/images/PhotoHappyWoman.svg'
import ButtonGreen from "../ButtonGreen";
import { Container, ContentImage, GroupText } from "./styles";

export default function Sec4() {
  return (
    <Container>

      <div className="containerImages">

        <ContentImage>

          <Image
            src={PhotoMrChef}
            alt="Photo Mr.Chef"
          />

          <GroupText>
            <h2>Frankie</h2>
            <h3>Member since 2016</h3>
          </GroupText>

        </ContentImage>

        <ContentImage>

          <Image
            src={PhotoPlanter}
            alt="Photo planter"
          />
          <GroupText>
            <h2>Camile</h2>
            <h3>Member since 2012</h3>
          </GroupText>

        </ContentImage>

        <ContentImage>

          <Image
            src={PhotoHappyWoman}
            alt="Photo Happy Woman"
          />
          <GroupText>
            <h2>Elayne</h2>
            <h3>Member since 2018</h3>
          </GroupText>

        </ContentImage>

      </div>

      <h1>Learn how others are reaching their audience easier than ever before.</h1>

      <div className="enterYourEmail">
        <input type="text" placeholder="Enter your email" />
        <ButtonGreen text="JOIN OUR LIST"></ButtonGreen>
      </div>

      <h4>Thanks! Email received.</h4>

    </Container>

  )
}
