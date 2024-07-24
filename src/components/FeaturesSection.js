import React, {useState} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faRobot, faEye, faFingerprint, faBrain, faPersonRunning, faMicrochip} from '@fortawesome/free-solid-svg-icons';

const Section = styled.section`
    padding: 4rem 0rem;
    background-color: rgba(243, 243, 243, 0.95);
    transition: padding-bottom 0.3s ease;
     padding-bottom: ${props => props.extraPadding}px;
    //overflow: hidden; /* Hide horizontal overflow to keep section tidy */
    
    //padding-bottom: 4px;
    font-family: 'Poppins', sans-serif; /* Apply font */

`;

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
`;

const FeatureContainer = styled.div`
    display: flex;
    overflow-x: auto; /* Enable horizontal scrolling */
    scroll-behavior: smooth;
    padding: 0 8rem; /* Add some padding on the sides for better scroll appearance */

    
    /* WebKit-based browsers */
    ::-webkit-scrollbar {
        height: 12px; /* Scrollbar height */
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1; /* Scrollbar track color */
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #888; /* Scrollbar thumb color */
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; /* Scrollbar thumb color on hover */
    }

    /* Firefox */
    scrollbar-width: thin; /* Scrollbar width */
    scrollbar-color: #888 #f1f1f1; /* Scrollbar thumb and track color */
`;

const FeatureGrid = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 2rem;
`;

const FeatureCard = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 255, 0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
    min-width: 80px; /* Set min-width to be 3 times smaller than previous width */
    height: ${props => props.isExpanded ? `${props.expandedHeight}*4px` : `${props.collapsedHeight}px`};
    overflow: hidden;

    margin-bottom: 12px;

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
    opacity: ${props => props.isVisible ? '1' : '0'};
    max-height: ${props => props.isVisible ? '1000px' : '0'};
    transition: all 0.3s ease;
    overflow: hidden;
`;

const FeatureCardContent = ({icon, title, description, collapsedHeight, expandedHeight, onExpand}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
        onExpand(!isExpanded);
    };

    return (
        <FeatureCard
            isExpanded={isExpanded}
            onClick={toggleExpansion}
            onMouseEnter={() => {
                setIsExpanded(true);
                onExpand(true);
            }}
            onMouseLeave={() => {
                setIsExpanded(false);
                onExpand(false);
            }}
            collapsedHeight={collapsedHeight}
            expandedHeight={expandedHeight}
        >
            <FeatureIcon>
                <FontAwesomeIcon icon={icon}/>
            </FeatureIcon>
            <FeatureTitle>{title}</FeatureTitle>
            <FeatureDescription isVisible={isExpanded}>
                {description}
            </FeatureDescription>
        </FeatureCard>
    );
};

const FeaturesSection = () => {
    const [collapsedHeight] = useState(200);
    const [expandedHeight] = useState(300);
    const [extraPadding, setExtraPadding] = useState(0);

    const handleExpand = (isExpanded) => {
        setExtraPadding(isExpanded ? expandedHeight - collapsedHeight : 0);
    };

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
            description: "Stay ahead of the everyone else, with our adaptive machine learning technology. Our bot continuously evolves, guaranteeing top-notch automation and reliability."
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

    return (
        <Section id="features" extraPadding={extraPadding}>
            <SectionTitle>Our Technology</SectionTitle>
            <FeatureContainer>
                <FeatureGrid>
                    {features.map((feature, index) => (
                        <FeatureCardContent
                            key={index}
                            {...feature}
                            collapsedHeight={collapsedHeight}
                            expandedHeight={expandedHeight}
                            onExpand={handleExpand}
                        />
                    ))}
                </FeatureGrid>
            </FeatureContainer>
        </Section>
    );
};

export default FeaturesSection;
