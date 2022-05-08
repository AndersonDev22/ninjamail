import { backgroundClip } from 'html2canvas/dist/types/css/property-descriptors/background-clip';
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
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

  @media (max-width: 768px) {
    height: 2.6rem;
    width:8rem;
    font-size:13px;
    padding:
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
