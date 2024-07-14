// src/components/AboutSection.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRobot,
    faBrain,
    faUserGroup,
    faMicrochip
} from '@fortawesome/free-solid-svg-icons';

const AboutContainer = styled.section`
    padding: 4rem 2rem;
    background-color: #f5f5f5;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
`;

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const FeatureCard = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
        transform: translateY(-5px);
    }
`;

const FeatureIcon = styled(FontAwesomeIcon)`
    font-size: 3rem;
    color: #553fb5;
    margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
    color: #666;
`;

const features = [
    {
        icon: faRobot,
        title: 'Advanced Automation',
        description: 'Our cutting-edge AI technology provides seamless automation for OSRS tasks, ensuring efficiency and reliability.',
    },
    {
        icon: faBrain,
        title: 'An Intelligent Alternative to Botting on OSRS',
        description: 'Experience the future of botting with our AI-driven solution that mimics human behavior, providing a safe and undetectable alternative to traditional botting.',
    },
    {
        icon: faMicrochip,
        title: 'Intelligent Chat Responses',
        description: 'Our BotSafe bot responds back to players within the game using a customizable Large Language Model (LLM) tailored to your preferences and taste.',
    },
    {
        icon: faUserGroup,
        title: 'Helpful Support',
        description: 'Our dedicated support team is here to assist you with any questions or issues, ensuring a smooth and enjoyable experience.',
    },
];

const AboutSection = () => {
    return (
        <AboutContainer>
            <Title>Why Choose Bot Safe on OSRS?</Title>
            <FeaturesGrid>
                {features.map((feature, index) => (
                    <FeatureCard key={index}>
                        <FeatureIcon icon={feature.icon} />
                        <FeatureTitle>{feature.title}</FeatureTitle>
                        <FeatureDescription>{feature.description}</FeatureDescription>
                    </FeatureCard>
                ))}
            </FeaturesGrid>
        </AboutContainer>
    );
};

export default AboutSection;