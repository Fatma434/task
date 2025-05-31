import styled from "styled-components";

export default function About() {
  return (
    <Wrapper>
      <Content>
        <Heading>About Tourism App</Heading>
        <Paragraph>
          Welcome to <strong>Tourism App</strong> — your ultimate companion for planning unforgettable adventures. Our mission is to make travel planning simple, fast, and enjoyable for everyone.
        </Paragraph>
        <Paragraph>
          Whether you're looking for a beach escape, a mountain retreat, or a cultural experience, we help you discover top destinations, book trips with ease, and get all the information you need in one place.
        </Paragraph>
        <Paragraph>
          Our team is passionate about travel and technology, and we're constantly working to bring you the best tools and experiences. Thank you for choosing us to be a part of your journey!
        </Paragraph>
      </Content>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Content = styled.div`
  background: white;
  padding: 2rem 2.5rem;
  max-width: 700px;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #1e40af;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #374151;
  line-height: 1.8;
  margin-bottom: 1.2rem;

  strong {
    color: #2563eb;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

