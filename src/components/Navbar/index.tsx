import Link from "next/link";
import Image from "next/image";
import NinjaMailLogo from '../../../public/images/NinjaMailLogo.png'
import { Btn, ContainerMenu, Logo, Menu, Nav, Text } from "./styles";

export default function Navbar() {
  return (
    <Nav>

      <Link href="/">
        <Logo>
          <Image src={NinjaMailLogo} alt="logomarca ninjamail" />
        </Logo>
      </Link>

      <Menu id="Menu">
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

      <ContainerMenu>
      <input type="checkbox" id="check"/>
      <label htmlFor="check">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </ContainerMenu>
    </Nav>
  )
}
