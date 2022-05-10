import Image from "next/image";
import ButtonWhite from "../ButtonWhite";
import { Container } from "./styles";
import ImageVideo from '../../../public/images/Video.svg'

export default function Video() {
  return (
    <Container>

      <figure className="ImageVideo">
        <Image
          src={ImageVideo}
          alt="PhotoGirl"
        />
      </figure>

      <div className="TitleAndButton">
        <h1>Reach More Customers</h1>
        <ButtonWhite text="LEARN HOW" />
      </div>

    </Container>
  )
}
