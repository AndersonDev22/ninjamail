import styled from "styled-components";

export const Container = styled.div`
  /* border:1px solid blue; */
  display:flex;
  width:100%;
  height:630px;
  max-width:1440px;
  padding:44px 165px;
  justify-content:space-between;
  /* margin-bottom:110px; */

  @media (max-width: 768px) {
    width:768px;
    height:370px;
    padding:20px 40px;
    margin-bottom:10px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:820px;
    justify-content:center;
    flex-direction:column;
    align-items:flex-start;
    padding:10px;

  }

  h1{
    font-size:44px;
     font-weight:900;
     font-style:normal;
     line-height: 48px;
     font-family: 'Playfair Display';
     margin-bottom:20px;

     @media (max-width: 768px) {
        font-size:28px;
        line-height: 31px;
        margin-bottom:18px;
      }
  }

  h2{
    /* border:1px solid; */
    width:300px;
    text-align:left;
    padding:20px;
    font-family:'Raleway';
    font-style:normal;
    font-weight:500;
    font-size:16px;
    line-height:26px;

    @media (max-width: 768px) {
      width:209px;
      height:79px;
      font-size:12px;
      line-height:16px;
    }
  }

  h3{
    /* border:1px solid; */
    width:319px;
    height:100%;
    display:flex;
    align-items:center;
    text-align:left;
    padding:0 20px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #4ba87d;

    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 14px;
    }

    @media (max-width: 320px) {
      width:200px;
      font-size: 12px;
      line-height: 14px;
    }
  }

  .container-thumb1{
    /* border:1px solid; */
    width:320px;
    height:450px;
    display:flex;
    justify-content:center;
    flex-direction:column;
  }

  .container-thumb2{
    /* border:1px solid; */
    width:320px;
    height:450px;
    justify-content:center;
    flex-direction:column;
    margin-top:80px;
  }

  .sec3-txt{
    /* border:1px solid; */
    width:365px;
    height:324px;
    justify-content:center;
    flex-direction:column;
    margin-top:130px;

    h2{
      padding:0;
      font-size:19px;
      line-height: 26px;
    }
  }

  .figure{
    /* border:1px solid red; */
    display:flex;
    justify-content:center;
    width:319px;
    height:253px;
  }

  .white-box{
  /* border:1px solid blueviolet; */
  width:319px;
  height:195px;
  display:flex;
  justify-content:left;
  flex-direction:column;
  background:#fff;

  @media (max-width: 768px) {
    width:209px;
    height:206px;
    margin-top:40px;
  }

  @media (max-width: 320px) {
    margin:30px 80px 0 0;
  }

  h2{
    @media (max-width: 768px) {
    padding:0;
    }
  }
  }
`;
