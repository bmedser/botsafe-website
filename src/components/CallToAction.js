import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '../globalStyles.css';

const CTAContainer = styled.div`
    background-color: #f5f5f5;
    padding: 4rem 2rem;
    text-align: center;
`;

const CTATitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333;
`;

const CTADescription = styled.p`
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #666;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Montserrat', sans-serif; /* Default font */
`;

const CTADescriptionItalic = styled(CTADescription)`
    font-family: 'MontserratThinItalic', sans-serif; /* Italic font */
`;

const GetStartedButton = styled(Link)`
  background-color: #4CAF50;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0,0,0,0.15);
  }
`;

const CallToAction = () => {
    return (
        <CTAContainer>

            <CTATitle>Ready to Bot OSRS Safely?</CTATitle>

            <CTADescription>
                Never will you have to worry about being banned again.
            </CTADescription>

            <CTADescriptionItalic>
                BotSafe was born out of frustration with existing botting software.
            </CTADescriptionItalic>

            <CTADescription>
                Our mission is to deliver a superior solution that seamlessly integrates advanced AI models, user-friendly features, and robust anti-ban measures. With BotSafe, experience precise human-like behavior and a secure botting environment.
            </CTADescription>

            <CTADescriptionItalic>
                Choose BotSafe for a smarter, safer, and more reliable botting experience.
            </CTADescriptionItalic>


            <CTADescription>
                Join the new community!
            </CTADescription>

            <GetStartedButton to="https://discord.gg/XmhAZgmhJb">Join Discord</GetStartedButton>
        </CTAContainer>
    );
};

export default CallToAction;