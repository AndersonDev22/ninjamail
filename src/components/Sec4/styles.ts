import styled from "styled-components";

export const Container = styled.div`
  border:1px solid;
  display:flex;
  width:100%;
  height:630px;
  max-width:1440px;
  justify-content:center;
  align-items:center;
  flex-direction:column;

  @media (max-width: 768px) {
    width:768px;
    height:345px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:820px;
    padding:0;
    align-items:center;
  }

  h1{
    width:850px;
    height:126px;
    max-width:1440px;
    font-size:44px;
    font-weight:900;
    font-style:normal;
    line-height: 48px;
    font-family: 'Playfair Display';
    text-align:center;
    margin:40px 0 10px 0;

    @media (max-width: 768px) {
      width:540px;
      height:90px;
      font-size:28px;
      line-height: 36px;
      margin:20px 0 5px 0;
    }

    @media (max-width: 320px) {
      width:240px;
      height:100px;
      font-size:22px;
    }
  }

  h4{
    width:600px;
    color:#4ba87d;
    font-family:'Raleway';
    font-style:normal;
    font-weight:500;
    font-size:21px;
    line-height: 25px;
    letter-spacing:1.05px;
    text-align:left;
    margin-top:16px;

    @media (max-width: 768px) {
      width:410px;
      font-size: 13px;
      line-height: 15px;
      letter-spacing: 0.65px;
      margin-top:0px;
    }

    @media (max-width: 320px) {
      text-align:center;
      width:210px;
    }
  }

  .containerImages{
    margin-top:1rem;
    display:flex;
    width:1089px;
    height:239px;
    max-width:1440px;
    justify-content:space-between;

    @media (max-width: 768px) {
      width:704px;
      height:155px;
    }

    @media (max-width: 320px) {
      width:320px;
      height:500px;
      justify-content: center;
      flex-direction:column;
      align-items:center;
      margin-top:0;
    }
  }

  .enterYourEmail{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:10px;
    width:668px;
    max-width:1440px;

  @media (max-width: 768px) {
    width:440px;
    height:50px;
  }

  @media (max-width: 320px) {
    width:280px;
    height:150px;
    flex-wrap:none;
    justify-content: center;
    flex-direction:column;
    align-items:center
  }

  input{
    outline:none;
    width: 420px;
    height: 65px;
    background: #FFFFFF;
    border:1px solid #9F9F9F;
    border-radius: 5px;
    padding:.5rem;
    font-weight: 500;
    font-style: normal;
    font-size: 21px;
    line-height: 25px;
    letter-spacing: 1.05px;

  @media (max-width: 768px) {
    width:275px;
    height:42px;
    font-size: 13px;
    letter-spacing: 0.65px;
    margin-right:12px;
  }

  @media (max-width: 320px) {
    width:280px;
    height:42px;
  }

    :focus{
      border:2px solid #4ba87d;
    }
  }

  }
`;

export const GroupText = styled.div`
  width:200px;
  height:70px;
  display:flex;
  justify-content:flex-start;
  flex-direction:column;
  position:absolute;
  margin:16px;

  @media (max-width: 768px) {
      margin:12px;
    }

  @media (max-width: 320px) {
    width:180px;
    height:40px;
    margin:12px;
  }

 h2{
    text-align:left;
    color: #FFFFFF;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 900;
    font-size: 34px;
    line-height:40px;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 26px;
    }

    @media (max-width: 320px) {
      font-size: 22px;
    }
  }

  h3{
    color: #FFFFFF;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 22px;

    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 14px;
    }
  }

`;

export const ContentImage = styled.div`
  width:342px;
  height:240px;
  display:flex;
  align-items:flex-end;

  @media (max-width: 768px) {
   width: 224px;
   height:155px;
  }

  @media (max-width: 320px) {
    width:223px;
    height:157px;
    justify-content: center;
    padding:10px;
  }
`;
