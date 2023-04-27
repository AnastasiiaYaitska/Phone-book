import CopyrightIcon from '@mui/icons-material/Copyright';
import { Container } from '@mui/material';
import { FooterWrap, DescriptionWrap, Description } from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrap>
      <Container maxWidth="sl">
        <DescriptionWrap>
          <Description>
            Copyright <CopyrightIcon /> 2023.
          </Description>
          <p>Created by Anastasiia Yaitska.</p>
        </DescriptionWrap>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
