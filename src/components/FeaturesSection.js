import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRobot,
    faEye,
    faFingerprint,
    faBrain,
    faPersonRunning,
    faMicrochip
} from '@fortawesome/free-solid-svg-icons';

const Section = styled.section`
    padding: 4rem 0;
    background-color: rgba(248, 248, 248, 0.95);
    font-family: 'Poppins', sans-serif;
`;

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
`;

const FeatureContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 2rem;
`;

const FeatureGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    max-width: 1200px;
`;

const FeatureCard = styled.div`
    background-color: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 255, 0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
    width: ${props => props.isExpanded ? '400px' : '150px'};
    height: ${props => props.isExpanded ? 'auto' : '200px'};
    overflow: hidden;

    &:hover {
        transform: translateY(-5px);
    }
`;

const FeatureIcon = styled.div`
    font-size: 2rem;
    color: #553fb5;
    margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
    margin-bottom: 1rem;
    color: #333;
    font-size: ${props => props.isExpanded ? '1.2rem' : '1rem'};
`;

const FeatureDescription = styled.p`
    color: #666;
    opacity: ${props => props.isVisible ? '1' : '0'};
    max-height: ${props => props.isVisible ? '1000px' : '0'};
    transition: all 0.3s ease;
    overflow: hidden;
`;

const FeatureCardContent = ({ icon, title, description, isExpanded, onClick }) => {
    return (
        <FeatureCard isExpanded={isExpanded} onClick={onClick}>
            <FeatureIcon>
                <FontAwesomeIcon icon={icon} />
            </FeatureIcon>
            <FeatureTitle isExpanded={isExpanded}>{title}</FeatureTitle>
            <FeatureDescription isVisible={isExpanded}>
                {description}
            </FeatureDescription>
        </FeatureCard>
    );
};

const FeaturesSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const features = [
        {
            icon: faRobot,
            title: "Advanced Automation",
            description: "Forget the disappointment that comes from traditional botting softwares. Experience the pinnacle of automation with our AI OSRS bot. Designed to replicate human-like behavior with unmatched precision, our bots execute your tasks with unparalleled safety and reliability."
        },
        {
            icon: faEye,
            title: "Computer Vision",
            description: "Harness the power of cutting-edge computer vision technology. Our bots analyze and interact with the game environment with remarkable accuracy, making intelligent decisions for more effective and smarter automation."
        },
        {
            icon: faBrain,
            title: "Machine Learning",
            description: "Stay ahead of everyone else, with our adaptive machine learning technology. Our bot continuously evolves, guaranteeing top-notch automation and reliability."
        },
        {
            icon: faFingerprint,
            title: "Biometric Integration",
            description: "Achieve the ultimate in bot security with our biometric integration. Each user's bot is uniquely tailored to their own human-to-machine inputs. Unlike competitors who deploy identical techniques across thousands of bots, BotSafe ensures you are literally replicating yourself, providing unmatched safety and undetectability."
        },
        {
            icon: faPersonRunning,
            title: "Unmatched Efficiency",
            description: "Designed with efficiency and reliability at its core, BotSafe stands out from the competition. Developed in C++ and leveraging advanced CV techniques, our bot delivers superior performance you can trust."
        },
        {
            icon: faMicrochip,
            title: 'AI Chat Responses',
            description: 'With the intelliChat Package, BotSafe responds back to players within the game using a customizable Large Language Model (LLM) tailored to your preferences. Customise your own personality traits, so no one suspects you are a bot.',
        },
    ];

    const handleCardClick = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <Section id="features">
            <SectionTitle>Our Technology</SectionTitle>
            <FeatureContainer>
                <FeatureGrid>
                    {features.map((feature, index) => (
                        <FeatureCardContent
                            key={index}
                            {...feature}
                            isExpanded={index === expandedIndex}
                            onClick={() => handleCardClick(index)}
                        />
                    ))}
                </FeatureGrid>
            </FeatureContainer>
        </Section>
    );
};

export default FeaturesSection;