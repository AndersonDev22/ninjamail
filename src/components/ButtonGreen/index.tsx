import styled from 'styled-components';

const Btn = styled.button`
  width: 12.5rem;
  height:4rem;
  background: #4ba87d;
  color: #FFFFFF;
  text-align:center;
  font-size:1.3rem;
  font-family: 'Raleway';
  font-weight: 900;
  line-height: 25px;
  letter-spacing: 1.05px;
  border:3px solid #4ba87d;
  cursor: pointer;
`;

interface TextProps {
  text:string
}

export default function ButtonGreen(props:TextProps) {

  return(
    <Btn>
      {props.text}
    </Btn>


  )
}
