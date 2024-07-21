// src/components/AboutSection.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBrain,
    faUserGroup,
    faShieldAlt,
    faDollarSign
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
        icon: faBrain,
        title: 'The Safest OSRS Bot',
        description: 'Our AI-driven solution for OSRS is designed to mimic human behavior, offering a safer and less detectable option for botting.'
    },
    {
        icon: faShieldAlt,
        title: 'Unmatched Anti-Ban Technology',
        description: 'Our anti-ban technology for OSRS is built to keep your account secure. With smart AI designed to minimize detection risks, you can use our tool with confidence knowing your account is well-guarded.'
    },
    {
        icon: faDollarSign,
        title: 'Earn Money Safely',
        description: 'Maximize your in-game profits with confidence. Our AI-powered bot allows you to farm gold and valuable items securely, giving you peace of mind and financial benefits.',
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