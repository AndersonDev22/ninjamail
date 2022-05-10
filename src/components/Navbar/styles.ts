import styled from "styled-components";

export const Nav = styled.div`
  width:1440px;
  height:102px;
  text-decoration:none;

  @media (max-width: 768px) {
    width:768px;
    height:66px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:56px;
  }

  .navbar input[type="checkbox"],
  .navbar .hamburger-lines {
    display: none;
  }

  .navbar {
    position: fixed;
    top:0;
    width: 100%;
    background: #fff;
    color: #000;
    width:1440px;
    height: 102px;
    z-index: 100;

    @media (max-width: 768px) {
      width:768px;
      height:66px;
    }

    @media (max-width: 320px) {
      width:320px;
      height:56px;
      opacity: 0.95;
    }
  }

  .navbar-container {
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:102px;
    align-items:center;

    @media (max-width: 768px) {
      width:768px;
      height:66px;
    }

    @media (max-width: 320px) {
      display: block;
    }
  }

  .menu-items {
    width:780px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    order: 2;
    display: flex;
    margin-right:30px;

    @media (max-width: 768px) {
      width:500px;
      height:66px;
    }

    @media (max-width: 320px) {
      width:360px;
      padding-top: 100px;
      background: #fff;
      height: 100vh;
      transform: translate(-150%);
      display: flex;
      justify-content:flex-start;
      flex-direction: column;
      margin-left: -40px;
      transition: transform 0.5s ease-in-out;
      backdrop-filter: blur(4px);
    }

  }

  .button{
    margin-right:2rem;
    width:10rem;
    height:41px;
    background: #4ba87d;
    color:#ffffff;
    font-weight:800;
    font-size:17px;
    line-height:20px;
    text-align:center;
    border:none;
    cursor: pointer;

    :hover{
      transition:0.3s;
      filter:brightness(0.9);
    }

    @media (max-width: 768px) {
      width:125px;
      height:25px;
      font-size:11px;
      line-height: 13px;
      letter-spacing: 0.825px;
      margin-left:15px;
      padding:6px 10px;
    }

    @media (max-width: 320px) {
      width:225px;
      height:35px;
    }

  }

  .menu-items li {

    list-style: none;
    margin-bottom: 10px;

    @media (max-width: 320px) {
      width:320px;
      text-align: center;
      align-items: center;
      margin-left:40px;
    }
  }

  .menu-items a {
    color:#000;
    font-family: 'Raleway';
    font-style: normal;
    text-decoration:none;
    font-size:17px;
    font-weight:800;
    margin-right:1.5rem;
    border-bottom: 4px solid transparent;
    padding:0.3rem 0.5rem;
    cursor: pointer;
    transition:.3s;

    &:hover{
      border-bottom: 4px solid #4ba87d;
    }

    @media (max-width: 768px) {
      font-size:11px;
      line-height: 13px;
      letter-spacing: 0.825px;
      margin-right:5px;
      padding:4px 10px;
    }

    @media (max-width: 320px) {
      width:320px;
      font-size: 18px;
      line-height:2;
    }
  }

  .logo {
    order: 1;
    margin:22px 48px 10px 40px;
    cursor: pointer;

    @media (max-width: 768px) {
      margin:12px 38px 5px 20px;
      width:155px;
      height:24px;
    }

    @media (max-width: 320px) {
      width:135px;
      height:20px;
      top:4px;
      position:absolute;
      right:-20px
    }
  }

  @media (max-width: 320px) {

    .navbar-container input[type="checkbox"],
    .navbar-container .hamburger-lines {
      display: block;
    }

    .navbar-container input[type="checkbox"] {
      position: absolute;
      display: block;
      height: 32px;
      width: 30px;
      top: 20px;
      left: 20px;
      z-index: 5;
      opacity: 0;
    }

    .navbar-container .hamburger-lines {
      display: block;
      height: 23px;
      width: 35px;
      position: absolute;
      top: 17px;
      left: 20px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .navbar-container .hamburger-lines .line {
      display: block;
      height: 4px;
      width: 100%;
      border-radius: 10px;
      background: #333;
    }

    .navbar-container .hamburger-lines .line1 {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
    }

    .navbar-container .hamburger-lines .line2 {
      transition: transform 0.2s ease-in-out;
    }

    .navbar-container .hamburger-lines .line3 {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
    }

    .navbar-container input[type="checkbox"]:checked ~ .menu-items {
      transform: translateX(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
      transform: rotate(35deg);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
      transform: scaleY(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
      transform: rotate(-35deg);
    }

}`;
