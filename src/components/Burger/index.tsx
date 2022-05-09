import styled from "styled-components"

const ContainerMenu = styled.div`
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

export default function Burguer() {
  return (
    <ContainerMenu>
      <input type="checkbox" id="check"/>
      <label htmlFor="check">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </ContainerMenu>
  )
}
