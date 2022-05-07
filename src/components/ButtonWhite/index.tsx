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