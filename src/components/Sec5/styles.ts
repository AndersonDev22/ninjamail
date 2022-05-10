import styled from "styled-components";

export const Container = styled.div`
  width:1440px;
  height:443px;
  max-width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

  @media (max-width: 768px) {
    height: 17.6rem;
  }

  @media (max-width: 320px) {
    width:320px;
    height:500px;
    margin-bottom:20px;
  }
`;

export const Title = styled.h1`
  width:30rem;
  text-align: center;
  font-size:44px;
  font-weight:900;
  font-style:normal;
  line-height: 48px;
  font-family: 'Playfair Display';
  margin:1rem;

  @media (max-width: 768px) {
    width:20rem;
    font-size:28px;
    line-height: 36px;
  }

  @media (max-width: 320px) {
    width:280px;
    font-size: 26px;
  }
`;

export const GroupImage = styled.div`
  display:flex;
  justify-content:space-between;
  width:944px;
  margin:38px;
  max-width:100%;

  @media (max-width: 768px) {
    padding:0 20px;
    width:768px;
    height:257px;
  }

  @media (max-width: 320px) {
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width:280px;
    margin:0px;
    height:357px;
  }
`;

export const ContainerImage = styled.figure`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 3rem;
  margin:0 1rem;

  @media (max-width: 320px) {
  margin:15px 5px;
  }
`;
