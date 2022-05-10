import styled from 'styled-components';

export const Btn = styled.button`
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

  :hover{
    transition:0.3s;
    filter:brightness(0.9);
  }

  @media (max-width: 768px) {
    width:132px;
    height:2.6rem;
    font-size:13px;
    letter-spacing:0.65px;
  }
`;
