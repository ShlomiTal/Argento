import styled from 'styled-components';

const Hero = styled.section`
  text-align: center;
  padding: 50px 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #cccccc;
`;

function Home() {
  return (
    <Hero>
      <Title>Welcome to Argento</Title>
      <Subtitle>The Elegant Edge of Finance</Subtitle>
    </Hero>
  );
}

export default Home;