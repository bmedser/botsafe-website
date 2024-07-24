// src/components/GetStartedPage.js
import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    padding: 4rem 2rem;
    background-color: #2a2a2a;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PricingGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
`;

const PlanCard = styled.div`
    background-color: #333333;
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`;

const PlanName = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

const PlanPrice = styled.div`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const PlanDescription = styled.p`
    text-align: center;
    margin-bottom: 2rem;
`;

const FeatureList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;

    &:before {
        content: '✓';
        color: #4CAF50;
        margin-right: 0.5rem;
    }
`;

const ActionButton = styled.button`
    background-color: ${props => props.color || '#4CAF50'};
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${props => props.hoverColor || '#45a049'};
    }
`;

const SpecialDeal = styled.div`
    background-color: ${props => props.color || '#4CAF50'};
    color: white;
    padding: 0.5rem;
    text-align: center;
    font-weight: bold;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin: -2rem -2rem 2rem -2rem;
`;

const plans = [
    {
        name: 'Free',
        price: '$0',
        description: 'Perfect for budding edupreneurs exploring initial steps before expansion.',
        features: [
            '1 admin',
            '1 course',
            '10 students',
            '100 Mb per video',
            'Course builder',
            'Company logo adding',
            'Stripe payments integration'
        ],
        buttonText: 'Get started',
        buttonColor: '#4CAF50',
        buttonHoverColor: '#45a049'
    },
    {
        name: 'Basic',
        price: '$29/month',
        regularPrice: '$37/month',
        description: 'Tailored for independent experts crafting and selling online courses.',
        features: [
            'All in Free plan, plus:',
            '1 admin',
            '10 courses',
            '500 Mb per video',
            '100 students',
            'Live lessons',
            'Mini exams'
        ],
        buttonText: 'Start 30-day trial',
        buttonColor: '#3f51b5',
        buttonHoverColor: '#303f9f',
        specialDeal: 'WINTER SALE -20%',
        specialDealColor: '#3f51b5'
    },
    {
        name: 'Pro',
        price: '$58/month',
        regularPrice: '$73/month',
        description: 'Ideal for coaching companies seeking a comprehensive business solution.',
        features: [
            'All in Basic plan, plus:',
            'Unlimited admins',
            'Unlimited courses',
            'Unlimited students',
            'Unlimited video',
            'Personalized onboarding',
            'Customized certificates'
        ],
        buttonText: 'Start 30-day trial',
        buttonColor: '#ffa000',
        buttonHoverColor: '#ff8f00',
        specialDeal: 'WINTER SALE -20%',
        specialDealColor: '#ffa000'
    }
];

const GetStartedPage = () => {
    return (
        <PageContainer>
            <PricingGrid>
                {plans.map((plan, index) => (
                    <PlanCard key={index}>
                        {plan.specialDeal && (
                            <SpecialDeal color={plan.specialDealColor}>
                                {plan.specialDeal}
                            </SpecialDeal>
                        )}
                        <PlanName>{plan.name}</PlanName>
                        <PlanPrice>{plan.price}</PlanPrice>
                        {plan.regularPrice && (
                            <div style={{textDecoration: 'line-through', marginBottom: '1rem'}}>
                                {plan.regularPrice}
                            </div>
                        )}
                        <PlanDescription>{plan.description}</PlanDescription>
                        <FeatureList>
                            {plan.features.map((feature, featureIndex) => (
                                <FeatureItem key={featureIndex}>{feature}</FeatureItem>
                            ))}
                        </FeatureList>
                        <ActionButton color={plan.buttonColor} hoverColor={plan.buttonHoverColor}>
                            {plan.buttonText}
                        </ActionButton>
                    </PlanCard>
                ))}
            </PricingGrid>
        </PageContainer>
    );
};

export default GetStartedPage;