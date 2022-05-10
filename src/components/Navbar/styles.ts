import styled from "styled-components";

export const Nav = styled.nav`
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
    width:768px;
    height:66px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:56px;

   #check:checked ~ #Menu{
     /* display:flex;
    margin-left:0;
    width:320px;
    height:200px;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    position:absolute;
    top:50px;
    background:#ffffff; */
    }
  }
`;

export const Logo = styled.div`
  margin-left:4.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left:20px;
    width:155px;
    height:24px;
  }

  @media (max-width: 500px) {
    width:135px;
    height:20px;
  }
`;

export const Text = styled.h4`
  font-size:17px;
  font-weight:800;
  margin-right:1.5rem;
  border-bottom: 4px solid transparent;
  padding:0.3rem 0.5rem;
  cursor: pointer;
  transition:.3s;

  @media (max-width: 768px) {
    font-size:11px;
    line-height: 13px;
    letter-spacing: 0.825px;
    margin-right:5px;
    padding:2px;

    @media (max-width: 768px) {
    font-size: 15px;
    line-height:2;
    }

  }

  &:Hover{
    border-bottom: 4px solid #4ba87d;
  }
`;

export const Menu = styled.div`
  display:flex;
  width:680px;
  justify-content:space-between;
  align-items:center;
  max-width:100%;

  @media (max-width: 768px) {
   width:520px;
   height:25px;
  }

  @media (max-width: 320px){
    display:none;
  }
`;

export const Btn = styled.button`
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
    margin-right:10px;
    padding:6px 10px;
  }
`;

export const ContainerMenu = styled.div`
  display:none;
  margin-top:5px;
  justify-content:center;
  align-items:center;
  width:30px;
  margin-right:20px;

@media screen and (max-width:320px) {

  display:flex;
}

input{
  border:1px solid;
  position:absolute;
  cursor: pointer;
  opacity:0;

  :checked + label div:nth-child(1){
    transform: rotate(-45deg);
    top:8px;
  }

  :checked + label div:nth-child(2){
    opacity:0;
  }

  :checked + label div:nth-child(3){
    transform: rotate(45deg);
    top:8px;
  }
}

label{ //label - checkbox-menu

  background:#fff;
  display:block;
  position: relative;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  /* z-index: 20; */

  div{
    display:block;
    position:absolute;
    background:#000;
    width:100%;
    height:4px;
    border-radius:30px;
    transition: 0.30s ease-in-out;

    :nth-child(1) {
      top:0;
    };

    :nth-child(2) {
      top:8px;
    };

    :nth-child(3) {
      top:16px;
    };

  }
}
`;
