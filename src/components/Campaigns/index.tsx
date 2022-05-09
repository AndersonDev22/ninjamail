import styled from "styled-components";
import Image from "next/image";
import PhotoGirl from '../../../public/images/PhotoGirl.svg'
import PhotoGroup from '../../../public/images/PhotoGroup.svg'

const Container = styled.div`
/* border: 1px solid goldenrod; */
  display:flex;
  width:1440px;
  height:3932px;
  max-width:1440px;
  padding:4rem 10.3rem;
  justify-content:space-between;

  @media (max-width: 768px) {
    width:768px;
    height:370px;
    padding:20px 40px;
  }

  @media (max-width: 320px) {
    width:320px;
    height:820px;
    justify-content:center;
    flex-direction:column;
    align-items:center;
  }

  h1{
    font-size:44px;
     font-weight:900;
     font-style:normal;
     line-height: 48px;
     font-family: 'Playfair Display';
     margin-bottom:24px;

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
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    @media (max-width: 768px) {
      width:209px;
      height:79px;
      font-size:12px;
      line-height:16px;
    }
  }

  h3{
    width:16rem;
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
  }
`;

const ContainerGroupImgText = styled.div`
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
    width:320px;
    height:591px;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    margin-top:10px;
  }

`;

const GroupImg = styled.div`
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

const GroupText = styled.section`
  margin-top:60px;
  width:23rem;
  height:20rem;
  display:flex;
  justify-content:left;
  flex-direction:column;

  @media (max-width: 768px) {
    width:209px;
    height:206px;
    margin-top:40px;
  }

  @media (max-width: 320px) {
  margin-top:10px;
  }

  h2{
    @media (max-width: 768px) {
    padding:0;
    }
  }
`;

export const Campaigns = () => {
  return (
    <Container>

      <GroupImg>

        <Image
          src={PhotoGirl}
          alt="PhotoGirl"
        />

        <h2>
          Launch campaigns but also find
          new customers. Our unique platform
          handles campaigns from start to end.
        </h2>

        <h3>Learn More &#8250;</h3>
      </GroupImg>

      <ContainerGroupImgText>

        <GroupImg>

          <Image
            src={PhotoGroup}
            alt="PhotoGirl"
          />

          <h2>
            Start building and sharing with your
            team today. NinjaMail is renowned for
            its industry leading team collaboration tools.
          </h2>

          <h3>Learn More &#8250;</h3>

        </GroupImg>

        <GroupText>

          <h1>
            The source for
            proven, engaging
            email campaigns
          </h1>

          <h2>
            Whether you&#8217;re a startup, small
            business, e-commerce store, or
            want to promote your app, NinjaMail
            has the feature set tailored for
            your business.
          </h2>

        </GroupText>

      </ContainerGroupImgText>

    </Container>
  )
}
