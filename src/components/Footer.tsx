import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #2a2a2a;
  padding: 10px;
  text-align: center;
  color: #cccccc;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2025 Argento. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;