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

  @media (max-width: 320px) {
    width:320px;
    height:480px;
    margin-top:20px;
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

  @media (max-width: 320px) {
    padding:none;
    flex-direction:column;
    align-items:center;
    height: 300px;
    padding:0;
 }

`;

const Logo = styled.div`
  margin-left:9.5rem;
  width:12.3rem;
  height:3rem;
  cursor: pointer;

  @media (max-width: 320px) {
  width:125px;
  height:30px;
  margin-left:0px;
  }
`;

const FooterList = styled.div`
  margin-left:12rem;
  width:36rem;
  height:12.5rem;
  display:flex;
  justify-content:space-between;

  @media (max-width: 768px) {
    margin-left:8rem;
  }

  @media (max-width: 320px) {
    width:320px;
    height:250px;
    flex-direction:column;
    justify-content:center;
    flex-wrap:wrap;
    margin-left:0px;
    padding:0 10px;
  }

  div{

    @media (max-width: 320px) {
     width:140px;
    display:flex;
    flex-direction:column;
    padding:5px;
    height:250px;
    }

  }
`;

const List = styled.ul`
/* border: 1px solid pink; */

@media (max-width: 320px) {
    /* margin:10px; */
    font-size:12px;
    line-height:14px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:20px;
    border-bottom:1px solid #c3c3c3;
  }

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

  @media (max-width: 320px) {
    width:280px;
    height:80px;
    justify-content:center;
    flex-direction:column;
    padding:10px;
    /* padding:0px; */
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

  @media (max-width: 320px) {

    text-align:center;
    height:70px;
    width:280px;
    font-size:9px;
    line-height: 19px;
  }

}

div{

  @media (max-width: 320px) {
  width:200px;
  height:20px;
  display:flex;
  justify-content:center;
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
          <div>
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

          <div>
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

          </div>

        </FooterList>

      </FooterLinks >

      <RightsReserved>
        <h4>
          NinjaMail is a sample project for Quest AI.
          © 2019 Quest AI, All rights reserved.
        </h4>
        <div>
          <h4>
            Terms &#38; Conditions
          </h4>
          <h4>
            Privacy Policy
          </h4>
        </div>
      </RightsReserved>

    </Container >
  )
}
