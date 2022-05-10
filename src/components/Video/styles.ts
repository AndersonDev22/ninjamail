import styled from "styled-components";

export const Container = styled.div`
  width:1440px;
  height:592px;
  max-width:1440px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:44px;

  @media (max-width: 768px) {
    width:632px;
    height:432px;
    margin:0 68px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:255px;
    margin:10px 0;
  }

  h1{
    color:#FFFFFF;
    font-size:60px;
    font-weight:900;
    font-style:normal;
    line-height: 80px;
    font-family: 'Playfair Display';
    margin-bottom:48px;

    @media (max-width: 768px) {
      font-size: 38px;
      line-height: 51px;
    }

    @media (max-width: 320px) {
      width:250px;
      height:40px;
      font-size:22px;
      line-height: 29px;
      margin-bottom:8px;
      text-align:center;
    }
  }

  .ImageVideo{
    display:flex;
    justify-content:center;
    align-items:center;
    width:944px;
    height:530px;
    position:relative;

    @media (max-width: 768px) {
      height:155px;
    }

    @media (max-width: 320px) {
      width:300px;
      height:400px;
    }
  }

  .TitleAndButton{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    position:absolute;

    @media (max-width: 320px) {
      width:240px;
      height:100px;
    }
  }
`;
