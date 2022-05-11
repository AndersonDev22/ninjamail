//  import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import NinjaMailLogo from '../../../public/images/NinjaMailLogo.png'

import { Container, FooterLinks, FooterList, List, RightsReserved } from "./styles";

export default function Footer() {
  return (
    <Container>

      <FooterLinks>

        <figure className="logo">
          <Link href="/">
            <Image src={NinjaMailLogo} alt="logomarca ninjamail" />
          </Link>
        </figure>

        <FooterList>
          <div className="blockList">
            <List>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Services</a></li>
              <li><a>Partners</a></li>
            </List>

            <List>
              <li><a>About Us</a></li>
              <li><a>Tutorials</a></li>
              <li><a>Resources</a></li>
              <li><a>Help Center</a></li>
              <li><a>Templates</a></li>
              <li><a>Case Studies</a></li>
            </List>
          </div>

          <div className="blockList">
            <List>

              <li>
                <Link href="https://medium.com/">
                  <a target="_blank">Medium</a>
                </Link>
              </li>

              <li>
                <Link href="https://twitter.com/">
                  <a target="_blank">Twitter</a>
                </Link>
              </li>

              <li>
                <Link href="https://www.facebook.com/">
                  <a target="_blank">Facebook</a>
                </Link>
              </li>

              <li>
                <Link href="https://www.linkedin.com/">
                  <a target="_blank">LinkedIn</a>
                </Link>
              </li>

            </List>

            <List>
              <li><a>Contact Us</a></li>
              <li><a>Slack</a></li>
              <li><a>Jobs</a></li>
            </List>

          </div>
        </FooterList>

      </FooterLinks >

      <RightsReserved>
        <div className="rightsReserved">
          <h3>NinjaMail is a sample project for Quest AI.© 2019 Quest AI, All rights reserved.</h3>
        </div>

        <div className="blockTerms">
          <h4>Terms &#38; Conditions</h4>
          <h4>Privacy Policy</h4>
        </div>
      </RightsReserved>

    </Container >
  )
}
