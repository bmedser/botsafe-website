// FeaturesSection.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faEye, faFingerprint, faBrain } from '@fortawesome/free-solid-svg-icons';

const Section = styled.section`
    padding: 4rem 2rem;
    background-color: rgba(243, 243, 243, 0.95);
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
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
        transform: translateY(-10px);
    }
`;

const FeatureIcon = styled.div`
    font-size: 3rem;
    color: #553fb5;
    margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 1rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  color: #666;
`;

const FeaturesSection = () => {
    const features = [
        {
            icon: faRobot,
            title: "Advanced Automation",
            description: "Our bots use cutting-edge AI to replicate human-like behavior with unprecedented accuracy. This ensures your tasks are performed safely and reliably."
        },
        {
            icon: faEye,
            title: "Computer Vision AI",
            description: "Utilizing state-of-the-art computer vision, our bots can accurately interpret and interact with the game environment. They understand context and environment on screen for intelligent decision-making, making your automation smarter and more effective."

        },
        {
            icon: faFingerprint,
            title: "Biometric Integration",
            description: "Integrate user biometrics to create undetectable and unbannable bots. By mimicking human behavior, our bots ensure ultimate safety, keeping your account secure from detection."
        },
        {
            icon: faBrain,
            title: "Machine Learning",
            description: "Our bots continuously learn and adapt to new scenarios and challenges. This allows them to improve performance over time, staying ahead of detection methods and ensuring long-term reliability."
        }
    ];

    return (
        <Section id="features">
            <SectionTitle>Our Technology</SectionTitle>
            <FeatureGrid>
                {features.map((feature, index) => (
                    <FeatureCard key={index}>
                        <FeatureIcon>
                            <FontAwesomeIcon icon={feature.icon} />
                        </FeatureIcon>
                        <FeatureTitle>{feature.title}</FeatureTitle>
                        <FeatureDescription>{feature.description}</FeatureDescription>
                    </FeatureCard>
                ))}
            </FeatureGrid>
        </Section>
    );
};

export default FeaturesSection;