import styled from "styled-components";

const Container = styled.div`

  border:2px solid;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:27rem;
  max-width:90rem;
  bottom:0;
  position:relative;
  `;


export default function Footer() {
    return (
      <Container>

       <p>Footer</p>

      </Container>
    )
  }
