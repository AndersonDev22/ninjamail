import styled from "styled-components";
import Image from "next/image";
import PhotoMrChef from '../../../public/images/PhotoMrChef.svg'
import PhotoPlanter from '../../../public/images/PhotoPlanter.svg'
import PhotoHappyWoman from '../../../public/images/PhotoHappyWoman.svg'
import ButtonGreen from "../ButtonGreen";

const Container = styled.div`
  padding:4rem 10.3rem;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:100%;
  height:37rem;
  max-width:90rem;
  background:transparent;

  @media (max-width: 768px) {
    width:768px;
    height:845px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:870px;
    padding:0;
    align-items:center;
  }

  h4{
    width:57%;
    color: #4ba87d;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    letter-spacing: 1.05px;
    text-align:left;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.65px;
  }

  @media (max-width: 320px) {

  }
}
`;

const GroupImages = styled.div`
  margin-top:1rem;
  display:flex;
  justify-content:space-between;
  width:100%;
  height:42rem;
  max-width:90rem;

  @media (max-width: 768px) {
   width: 44rem;
  }

  @media (max-width: 320px) {
    width:320px;
    height:591px;
    justify-content: center;
    flex-direction:column;
    align-items:center;
  }
`;

const GroupText = styled.div`
  display:flex;
  justify-content:flex-start;
  flex-direction:column;
  position:absolute;
  margin:16px;

  @media (max-width: 768px) {
      margin:12px;
    }

 h1{
    text-align:left;
    color: #FFFFFF;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 900;
    font-size: 34px;
    line-height: 40px;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 26px;
    }

    @media (max-width: 320px) {
      font-size: 22px;
    }
  }

  h2{
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

const ContDepositions = styled.div`
  display:flex;
  align-items:flex-end;

  @media (max-width: 768px) {
   width: 14rem;
  }

  @media (max-width: 320px) {
    width:223px;
    height:157px;
    justify-content: center;
    /* flex-direction:column; */
    padding:10px;
  }
`;

const GroupInputButton = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:10px;
  width:90%;
  max-width:90rem;

  @media (max-width: 768px) {
    width:440px;
    height:70px;
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
`;

const Title = styled.section`
  padding:1.5rem;
  width:80%;
  height:20rem;
  display:flex;
  justify-content:center;
  text-align:center;

  @media (max-width: 768px) {
    width:37rem;
  }

  @media (max-width: 320px) {
    width:320px;
    height:150px;
    padding:5px;
  }

  h1{
    font-size:44px;
    font-weight:900;
    font-style:normal;
    line-height: 48px;
    font-family: 'Playfair Display';
    text-align:center;

    @media (max-width: 768px) {

      font-size:28px;
      line-height: 36px;
    }

    @media (max-width: 320px) {
      width:240px;
      font-size:22px;
    }
  }
`;

export const Depositions = () => {
  return (
    <Container>

      <GroupImages>

        <ContDepositions>

          <Image
            src={PhotoMrChef}
            alt="Photo Mr.Chef"
          />

          <GroupText>
            <h1>Frankie</h1>
            <h2>Member since 2016</h2>
          </GroupText>

        </ContDepositions>

        <ContDepositions>

          <Image
            src={PhotoPlanter}
            alt="Photo planter"
          />
          <GroupText>
            <h1>Camile</h1>
            <h2>Member since 2012</h2>
          </GroupText>

        </ContDepositions>

        <ContDepositions>

          <Image
            src={PhotoHappyWoman}
            alt="Photo Happy Woman"
          />
          <GroupText>
            <h1>Elayne</h1>
            <h2>Member since 2018</h2>
          </GroupText>

        </ContDepositions>

      </GroupImages>

      <Title>
        <h1>
          Learn how others are reaching their
          audience easier than ever before.
        </h1>
      </Title>

      <GroupInputButton>
        <input type="text" placeholder="Enter your email" />
        <ButtonGreen text="JOIN OUR LIST"></ButtonGreen>
        <h4>Thanks! Email received.</h4>
      </GroupInputButton>

    </Container>

  )
}
