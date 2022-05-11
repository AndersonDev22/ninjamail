import styled from "styled-components";

export const Container = styled.div`
border:1px solid;
  width:1440px;
  height:443px;
  max-width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

  @media screen and (max-width: 768px) {
    width:768px;
    height:257px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:480px;
    margin-top:20px;
  }
`;

export const FooterLinks = styled.div`
border:1px solid blue;
  display:flex;
  justify-content:space-between;
  width:1440px;
  height:345px;
  padding:79px 250px;
  display:flex;
  max-width:100%;

  @media (max-width: 768px) {
    width:1040px;
    height: 230px;
    padding:45px 105px;
  }

  @media (max-width: 320px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:320px;
    height:350px;
    padding:0;
 }
`;

export const Logo = styled.div`
  border:1px solid green;
  width:195px;
  height:55px;
  cursor: pointer;

  @media (max-width: 768px) {
    width:130px;
  }
`;

export const FooterList = styled.div`
  border:1px solid yellowgreen;
  width:564px;
  height:200px;
  display:flex;
  justify-content:center;

  @media (max-width: 768px) {
    height:180px;
    width:264px;
  }

  @media (max-width: 320px) {
    width:280px;
    height:250px;
    flex-direction:column;
    justify-content:center;
    flex-wrap:wrap;
  }

 .blockList{
    display:flex;
    width:282px;
    height:200px;
    justify-content:space-between;

    @media (max-width: 320px) {
    width:140px;
    padding:5px;
    height:250px;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    }
  }
`;

export const List = styled.ul`
    border:1px solid red;
    width:141px;

    @media (max-width: 768px) {
      width:100px;
      height:180px;
    }

    @media (max-width: 320px) {
        font-size:12px;
        line-height:14px;
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-bottom:20px;
        border-bottom:1px solid #c3c3c3;
      }

    li{
      list-style:none;
      margin-bottom:7px;
    }

    a{
      color:#000;
      text-decoration:none;
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      font-size: 19px;
      line-height: 22px;
      border-bottom:2px solid transparent;
      transition:.3s;
      cursor: pointer;

      &:hover{
        border-bottom:2px solid #000000;
      }

    @media (max-width: 768px) {
      font-size:12px;
      line-height:14px;
    }
    }
`;

export const RightsReserved = styled.div`
  border:1px solid gray;
  display:flex;
  width:1088px;
  height:98px;
  justify-content: space-between;
  align-items:center;
  padding:39px 60px;
  border-top:2.4px solid #DBDBDB;
  max-width:100%;

  @media (max-width: 768px) {
    padding:1.9rem 5rem;
    height:3.4rem;
  }

  @media (max-width: 320px) {
    width:280px;
    height:80px;
    justify-content:center;
    flex-direction:column;
    padding:10px;
  }

  h3{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

    @media (max-width: 768px) {
      font-size:9px;
    }

    @media (max-width: 320px) {
      text-align:center;
      height:20px;
      width:280px;
      font-size:9px;
      line-height: 19px;
    }
  }

  h4{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

    @media (max-width: 768px) {
      font-size:9px;
    }

    @media (max-width: 320px) {
      text-align:center;
      height:20px;
      width:100px;
      font-size:9px;
      line-height: 19px;
    }
  }

  .rightsReserved{
    width:555px;

    @media (max-width: 320px) {
      width:280px;
      height:40px;
      margin-bottom:10px;
    }
  }

  .blockTerms{
    display:flex;
    width:280px;
    justify-content:space-between;


    @media (max-width: 320px) {
      width:200px;
      height:20px;
    }
  }
`;
