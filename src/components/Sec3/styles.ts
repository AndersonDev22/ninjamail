import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  width:1440px;
  height:592px;
  max-width:1440px;
  padding:64px 165px;
  justify-content:space-between;
  margin-bottom:110px;

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
    width:16rem;
    text-align:left;
    padding:1rem;
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
    width:256px;
    text-align:left;
    padding:1rem;
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
`;

export const ContainerGroupImgText = styled.div`
/* border: 2px solid magenta; */
  display:flex;
  justify-content:space-between;
  width:46rem;
  margin-top:60px;

  @media (max-width: 768px) {
    width:445px;
    height:290px;
    margin-top:50px;
  }

  @media (max-width: 320px) {
    width:300px;
    height:591px;
    justify-content:right;
    flex-direction:column;
    align-items:flex-end;
    margin-top:10px;
  }

`;

export const GroupImg = styled.div`
  top:2rem;
  width:20rem;
  height:30rem;
  background:#FFFFFF;
  display:flex;
  justify-content:left;
  flex-direction:column;

  @media (max-width: 768px) {
    width:209px;
    height:290px;
  }
`;

export const GroupText = styled.section`
  margin-top:60px;
  width:368px;
  height:350px;
  display:flex;
  justify-content:left;
  flex-direction:column;

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
`;
