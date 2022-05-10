import styled from 'styled-components';

const Btn = styled.button`
  width: 12.5rem;
  height:4rem;
  background: #FFFFFF;
  color: #4ba87d;
  text-align:center;
  font-size:1.3rem;
  font-family: 'Raleway';
  font-weight: 900;
  line-height: 25px;
  letter-spacing: 1.05px;
  border:none;
  cursor: pointer;

  :hover{
    transition:0.3s;
    filter:brightness(0.9);
  }

  @media (max-width: 768px) {
    height: 2.6rem;
    width:8rem;
    font-size:13px;
  }

  @media (max-width: 320px) {
    height: 45px;
    width:130px;
    font-size:14px;
    letter-spacing: 0.65px;

  }
`;

interface TextProps {
  text:string
}

export default function ButtonWhite(props:TextProps) {

  return(
    <Btn>
      {props.text}
    </Btn>


  )
}
