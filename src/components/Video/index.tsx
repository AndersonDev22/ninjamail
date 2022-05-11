import Image from "next/image";
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
        <button className="button">LEARN HOW</button>
      </div>

    </Container>
  )
}
