import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  width:100%;
  height:590px;
  max-width:1440px;
  justify-content:center;
  align-items:center;

  @media (max-width: 768px) {
    /* width:768px; */
    height:332px;
  }

  @media (max-width: 320px) {
    /* width:320px; */
    height:280px;
    /* margin-bottom:0; */
  }
`;

export const Section = styled.section`
  background:url("images/hero.svg") no-repeat right;
  background-size:contain;
  display:flex;
  justify-content:space-between;
  width:72rem;
  height:28rem;
  max-width:100%;

  @media (max-width: 768px) {
    width:711px;
    height:250px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:290px;
  }
`;

export const GroupText = styled.div`
  padding:16px;
  display:flex;
  justify-content:left;
  align-items:flex-start;
  flex-direction:column;

  @media (max-width: 768px) {
    width:330px;
    height:432px;
  }

  @media (max-width: 320px) {
    width:330px;
    height:230px;
    padding:12px;
  }

  h1{
    font-size:60px;
    font-weight:900;
    font-style:normal;
    line-height: 80px;
    font-family: 'Playfair Display';

    @media (max-width: 768px) {
      font-size: 38px;
      line-height: 46px;
    }

  }

  h4{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 26px;

  @media (max-width: 768px) {
    font-size:12px;
    line-height: 16px;
  }

  @media (max-width: 320px) {
    font-size:12px;
    line-height: 16px;
  }


  }
`;

export const GroupButton = styled.div`
  display:flex;
  margin-top:0.2rem;
  display:flex;
  justify-content:center;
  flex-direction:column;
  margin-top:10px;

  @media (max-width: 768px) {
    width:270px;
    font-size:12px;
    line-height: 16px;
    flex-direction:row;
    margin-top:20px;
  }

  @media (max-width: 320px) {
  margin-left:12px;
  }
`;

export const BtnWhite = styled.button`
  width: 12.5rem;
  height:4rem;
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
  border: 2px solid #4ba87d;

  :hover{
    transition:0.3s;
    filter:brightness(0.9);
  }

  @media (max-width: 768px) {
    width:132px;
    height: 42px;
    font-size:13px;
    padding:0;
    border: 2px solid #4ba87d;
    margin-left:20px;

  }
`;
