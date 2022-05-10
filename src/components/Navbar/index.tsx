import NinjaMailLogo from '../../../public/images/NinjaMailLogo.png'
import Image from "next/image"
import {Nav} from "./styles"

export default function Navbar() {
  return (
    <Nav>

    <nav className="navbar">

      <div className="navbar-container container">

          <input type="checkbox" name="" id=""/>

          <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>

          <ul className="menu-items">
              <li><a href="#home">FEATURES</a></li>
              <li><a href="#about">PRICING</a></li>
              <li><a href="#food">SERVICES</a></li>
              <li><a href="#food-menu">PARTNERS</a></li>
              <li><button className="button">SIGN UP FREE</button></li>
          </ul>

          <figure className="logo">
            <Image src={NinjaMailLogo} alt="logomarca ninjamail" />
          </figure>

      </div>
    </nav>

    </Nav>
  )
}

