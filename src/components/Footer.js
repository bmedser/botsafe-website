// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
    background-color: #121212;
    color: #ffffff;
    padding: 2rem;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
`;

const FooterSection = styled.div`
    flex: 1;
    min-width: 200px;
`;

const ContactSection = styled(FooterSection)`
    text-align: right;
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
    justify-content: flex-end;
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
                    <p>The Safe OSRS Bot</p>
                </FooterSection>
                <ContactSection>
                    <FooterTitle>Contact Us</FooterTitle>
                    <FooterList>
                        <FooterListItem>Email: info@botsafe.com</FooterListItem>
                        <FooterListItem>
                            <FooterLink href="https://discord.gg/XmhAZgmhJb" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faDiscord} /> Join our Discord for support
                            </FooterLink>
                        </FooterListItem>
                    </FooterList>
                    <SocialIcons>
                        <SocialIcon href="#"><FontAwesomeIcon icon={faTwitter} /></SocialIcon>
                        <SocialIcon href="#"><FontAwesomeIcon icon={faFacebook} /></SocialIcon>
                        <SocialIcon href="#"><FontAwesomeIcon icon={faLinkedin} /></SocialIcon>
                        <SocialIcon href="#"><FontAwesomeIcon icon={faGithub} /></SocialIcon>
                    </SocialIcons>
                </ContactSection>
            </FooterContent>
            <Copyright>
                © {new Date().getFullYear()} BotSafe. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;