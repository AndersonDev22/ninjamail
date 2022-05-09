import styled from "styled-components";
import Image from "next/image";
import PhotoGirl from '../../../public/images/PhotoGirl.svg'
import PhotoGroup from '../../../public/images/PhotoGroup.svg'

const Container = styled.div`
  padding:4rem 10.3rem;
  display:flex;
  justify-content:space-between;
  width:100%;
  height:42rem;
  max-width:90rem;
  background:transparent;

  @media (max-width: 768px) {
    width:768px;
    height:432px;
  }
`;

const ContainerGroupImgText = styled.div`
  display:flex;
  justify-content:space-between;
  width:46rem;
  margin-top:5rem;

  @media (max-width: 768px) {
    width:30rem;
  }

`;

const GroupText = styled.section`
  margin-top:5rem;
  width:23rem;
  height:20rem;
  display:flex;
  justify-content:left;
  flex-direction:column;

  @media (max-width: 768px) {
    width:13rem;
  }

  h1{
    font-size:44px;
     font-weight:900;
     font-style:normal;
     line-height: 48px;
     font-family: 'Playfair Display';
     margin-bottom:1.5rem;


  @media (max-width: 768px) {
    font-size:28px;
  }

  }

  h2{
    width:22rem;
    height:10rem;
    text-align:left;
    padding:0.5rem;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 26px;
    max-width:100%;

    @media (max-width: 768px) {
    font-size:12px;
  }

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
    width:13rem;
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
