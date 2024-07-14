// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: #121212;
  color: #ffffff;
  padding: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
`;

const FooterTitle = styled.h3`
  margin-bottom: 1rem;
`;

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #3f51b5;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #3f51b5;
  }
`;

const Copyright = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #999;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <FooterTitle>BotSafe</FooterTitle>
                    <p>Advanced automation solutions for your business needs.</p>
                    <SocialIcons>
                        <SocialIcon href="#"><FontAwesomeIcon icon={faTwitter} /></SocialIcon>
                        <SocialIcon href="#"><FontAwesomeIcon icon={faFacebook} /></SocialIcon>
                        <SocialIcon href="#"><FontAwesomeIcon icon={faLinkedin} /></SocialIcon>
                        <SocialIcon href="#"><FontAwesomeIcon icon={faGithub} /></SocialIcon>
                    </SocialIcons>
                </FooterSection>
                <FooterSection>
                    <FooterTitle>Quick Links</FooterTitle>
                    <FooterList>
                        <FooterListItem><FooterLink href="#about">About</FooterLink></FooterListItem>
                        <FooterListItem><FooterLink href="#features">Features</FooterLink></FooterListItem>
                        <FooterListItem><FooterLink href="#pricing">Pricing</FooterLink></FooterListItem>
                        <FooterListItem><FooterLink href="#contact">Contact</FooterLink></FooterListItem>
                    </FooterList>
                </FooterSection>
                <FooterSection>
                    <FooterTitle>Contact Us</FooterTitle>
                    <FooterList>
                        <FooterListItem>Email: info@botsafe.com</FooterListItem>
                        <FooterListItem>Phone: +1 (123) 456-7890</FooterListItem>
                        <FooterListItem>Address: 123 Tech Street, San Francisco, CA 94105</FooterListItem>
                    </FooterList>
                </FooterSection>
            </FooterContent>
            <Copyright>
                © {new Date().getFullYear()} BotSafe. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;