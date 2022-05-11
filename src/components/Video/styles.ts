import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  width:100%;
  height:650px;
  max-width:1440px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:100px;

  @media (max-width: 768px) {
    height:432px;
  }

  @media (max-width: 320px) {
    height:200px;
    margin:40px 0 35px 0;
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
    /* border:1px solid red; */
    display:flex;
    width:100%;
    max-width:1440px;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    position:relative;

    @media (max-width: 768px) {
      padding:76px;

    }

    @media (max-width: 320px) {
      padding:5px 15px;
      /* width:300px; */
      height:200px;
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

  .button{
  width:200px;
  height:64px;
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
    height:30px;
    width:70px;
    font-size:7px;
    letter-spacing: 0.65px;
  }
  }
`;
