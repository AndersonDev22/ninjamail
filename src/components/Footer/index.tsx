import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import NinjaMailLogo from '../../../public/images/NinjaMailLogo.png'

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:90rem;
  height:24rem;
  max-width:100%;
  background:transparent;

  @media (max-width: 768px) {
    width:768px;
    height:257px;
  }
`;

const FooterLinks = styled.div`
  display:flex;
  justify-content:center;
  width:90rem;
  height:27rem;
  padding:4.5rem;
  display:flex;
  max-width:100%;

  @media (max-width: 768px) {
    height: 14.4rem;
    padding:3rem 5rem;
  }

`;

const Logo = styled.div`
  margin-left:9,5rem;
  width:12.3rem;
  height:3rem;
  cursor: pointer;
`;

const FooterList = styled.div`
  margin-left:12rem;
  width:36rem;
  height:12.5rem;
  display:flex;
  justify-content:center;
  justify-content:space-between;

  @media (max-width: 768px) {
    margin-left:8rem;
  }
`;

const List = styled.ul`

  li{
    list-style:none;
    margin-bottom:7px;
  }

  a{
    color:#000000;
    text-decoration:none;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 22px;
    border-bottom:2px solid transparent;
    transition:.3s;
    cursor: pointer;

    &:hover{
      border-bottom:2px solid #000000;
    }

  @media (max-width: 768px) {
    font-size:12px;
    line-height:14px;
  }

  }
`;

const RightsReserved = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  width:68rem;
  padding:2.4rem;
  border-top:2.4px solid #DBDBDB;
  max-width:100%;

  @media (max-width: 768px) {
    padding:1.9rem 5rem;
    height:3.4rem;
  }

  h4{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

  @media (max-width: 768px) {
    font-size:9px;
  }

  }

`;

export default function Footer() {
  return (
    <Container>
      <FooterLinks>

        <Logo>
          <Link href="/">
            <Image src={NinjaMailLogo} alt="logomarca ninjamail" />
          </Link>
        </Logo>

        <FooterList>

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

          <List>

            <li>
              <Link href="https://medium.com/" target="_blank">
                <a>Medium</a>
              </Link>
            </li>

            <li>
              <Link href="https://twitter.com/" target="_blank">
                <a>Twitter</a>
              </Link>
            </li>

            <li>
              <Link href="https://www.facebook.com/" target="_blank">
                <a>Facebook</a>
              </Link>
            </li>

            <li>
              <Link href="https://www.linkedin.com/" target="_blank">
                <a>LinkedIn</a>
              </Link>
            </li>

          </List>

          <List>
            <li><a>Contact Us</a></li>
            <li><a>Slack</a></li>
            <li><a>Jobs</a></li>
          </List>

        </FooterList>

      </FooterLinks >

      <RightsReserved>
        <h4>
          NinjaMail is a sample project for Quest AI.
          © 2019 Quest AI, All rights reserved.
        </h4>
        <h4>
          Terms &#38; Conditions
        </h4>
        <h4>
          Privacy Policy
        </h4>
      </RightsReserved>

    </Container >
  )
}
