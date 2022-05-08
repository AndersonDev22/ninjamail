import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import NinjaMailLogo from '../../../public/images/NinjaMailLogo.png'

const Nav = styled.nav`
  background: #FFFFFF;
  width:90rem;
  height:6rem;
  top:0;
  position:fixed;
  display:flex;
  justify-content:space-between;
  align-items:center;
  max-width:100%;
  z-index:100;


  @media (max-width: 768px) {
    width:48rem;
  }

`;

const Logo = styled.div`
  margin-left:4.5rem;
  cursor: pointer;
`;

const Text = styled.h4`
  font-size:17px;
  font-weight:800;
  margin-right:1.5rem;
  border-bottom: 4px solid transparent;
  padding:0.3rem 0.5rem;
  cursor: pointer;
  transition:.3s;

  &:Hover{
    border-bottom: 4px solid #4ba87d;
  }
`;

const Menu = styled.div`
  display:flex;
  width:42.5rem;
  justify-content:space-between;
  align-items:center;
  max-width:100%;
`;

const Btn = styled.button`
  margin-right:2rem;
  width:10rem;
  height:2.5rem;
  background: #4ba87d;
  color:#ffffff;
  font-weight:800;
  font-size:17px;
  line-height:20px;
  text-align:center;
  border:none;
`;

export default function Navbar() {
  return (
    <Nav>

      <Link href="/">
        <Logo>
          <Image src={NinjaMailLogo} alt="logomarca ninjamail" />
        </Logo>
      </Link>

      <Menu>
        <Link href="/">
          <Text>FEATURES</Text>
        </Link>
        <Link href="/">
          <Text>PRICING</Text>
        </Link>
        <Link href="/">
          <Text>SERVICES</Text>
        </Link>
        <Link href="/">
          <Text>PARTNERS</Text>
        </Link>

        <Btn type="button">
          SIGN UP FREE
        </Btn>

      </Menu>

    </Nav>
  )
}
