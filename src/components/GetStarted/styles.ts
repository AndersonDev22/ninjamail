import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:336px;
  max-width:1440px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background:#4ba87d;

  @media (max-width: 768px) {
    width:768px;
    height:257px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:310px;
  }

 h1{
    width:950px;
    font-size:60px;
    font-weight:900;
    font-style:normal;
    line-height: 80px;
    font-family: 'Playfair Display';
    color:#FFFFFF;
    text-align:center;
    margin-bottom:41px;

    @media (max-width: 768px) {
      width:750px;
      font-size:42px;
      line-height: 51px;
    }

    @media (max-width: 320px) {
      width:300px;
      font-size:45px;
      line-height:48px;
      margin-bottom:40px;
      text-align:center;
    }
  }
`;
