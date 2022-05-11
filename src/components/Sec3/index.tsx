import Image from "next/image";
import PhotoGirl from '../../../public/images/PhotoGirl.svg'
import PhotoGroup from '../../../public/images/PhotoGroup.svg'
import { Container } from "./styles";

export default function Sec3() {
  return (
    <Container>
      <div className="container-thumb1">

        <figure className="figure">
          <Image src={PhotoGirl} alt="PhotoGirl" />
        </figure>

        <div className="white-box">
          <h2>
            Launch campaigns but also find
            new customers. Our unique platform
            handles campaigns from start to end.
          </h2>

          <h3>Learn More &#8250;</h3>
        </div>

      </div>

      <div className="container-thumb2">

        <figure className="figure">
          <Image src={PhotoGroup} alt="PhotoGirl" />
        </figure>

        <div className="white-box">
          <h2>
            Start building and sharing with your
            team today. NinjaMail is renowned for
            its industry leading team collaboration tools.
          </h2>

          <h3>Learn More &#8250;</h3>
        </div>

      </div>

      <div className="sec3-txt">
        <h1>The source for proven, engaging email campaigns</h1>

        <h2>
          Whether you&#8217;re a startup, small
          business, e-commerce store, or
          want to promote your app, NinjaMail
          has the feature set tailored for
          your business.
        </h2>
      </div>
    </Container>
  )
}
