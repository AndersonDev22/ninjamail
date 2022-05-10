import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  width:1440px;
  height:592px;
  max-width:1440px;
  justify-content:center;
  align-items:center;
  margin-bottom:44px;

  @media (max-width: 768px) {
    width:632px;
    height:432px;
    padding:70px;
    margin:0 68px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:175px;
    margin:40px 0;
  }

  h1{
    color:#FFFFFF;
    font-size:60px;
    font-weight:900;
    font-style:normal;
    line-height: 80px;
    font-family: 'Playfair Display';
    margin-bottom:3rem;

    @media (max-width: 768px) {
      font-size: 38px;
      line-height: 51px;
    }

    @media (max-width: 320px) {
      width:250px;
      font-size:22px;
      line-height: 29px;
    }
  }

  .ImageVideo{
    width:944px;
    height:531px;
    position:relative;
  }

  .TitleAndButton{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    position:absolute;
  }
`;
