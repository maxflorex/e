import styled from "styled-components";

const Container = styled.div`
height: 2rem;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 0.8rem;
`

const Anaouncement = () => {
  return <Container>
      Mega Deal! Free shipping all over the world on orders over $50
  </Container>;
};

export default Anaouncement;
