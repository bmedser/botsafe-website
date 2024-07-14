// PricingSection.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #121212;
  color: #ffffff;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const PricingCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const PlanName = styled.h3`
  margin-bottom: 1rem;
`;

const PlanPrice = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const PlanFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const PlanFeature = styled.li`
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  background-color: #3f51b5;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #303f9f;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ToggleButton = styled.button`
  background-color: ${props => props.active ? '#3f51b5' : 'transparent'};
  color: #ffffff;
  border: 1px solid #3f51b5;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
  }
`;

const PricingSection = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: 'Basic',
            monthlyPrice: 29,
            annualPrice: 290,
            features: ['1 bot', 'Basic automation', 'Email support']
        },
        {
            name: 'Pro',
            monthlyPrice: 79,
            annualPrice: 790,
            features: ['3 bots', 'Advanced automation', 'Priority support', 'Custom integrations']
        },
        {
            name: 'Enterprise',
            monthlyPrice: 199,
            annualPrice: 1990,
            features: ['Unlimited bots', 'Full feature set', '24/7 support', 'Dedicated account manager']
        }
    ];

    return (
        <Section id="pricing">
            <SectionTitle>Pricing Plans</SectionTitle>
            <ToggleContainer>
                <ToggleButton active={!isAnnual} onClick={() => setIsAnnual(false)}>Monthly</ToggleButton>
                <ToggleButton active={isAnnual} onClick={() => setIsAnnual(true)}>Annual</ToggleButton>
            </ToggleContainer>
            <PricingContainer>
                {plans.map((plan, index) => (
                    <PricingCard key={index}>
                        <PlanName>{plan.name}</PlanName>
                        <PlanPrice>${isAnnual ? plan.annualPrice : plan.monthlyPrice}{isAnnual ? '/year' : '/month'}</PlanPrice>
                        <PlanFeatures>
                            {plan.features.map((feature, featureIndex) => (
                                <PlanFeature key={featureIndex}>{feature}</PlanFeature>
                            ))}
                        </PlanFeatures>
                        <Button>Get Started</Button>
                    </PricingCard>
                ))}
            </PricingContainer>
        </Section>
    );
};

export default PricingSection;