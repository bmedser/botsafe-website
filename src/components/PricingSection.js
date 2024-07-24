import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    background-color: white;
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;

    font-family: 'Poppins', sans-serif; /* Apply font */
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
`;

const Subtitle = styled.p`
    text-align: center;
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 3rem;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
`;

const Card = styled.div`
    background-color: #f8f9fa;
    border-radius: 0.5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 280px;
    max-width: 350px;
    ${props => props.isPopular && `
    border: 2px solid #3b82f6;
    box-shadow: 0 4px 6px rgba(59, 130, 246, 0.1);
  `}
`;

const PopularBadge = styled.div`
    background-color: #3b82f6;
    color: white;
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    align-self: flex-end;
    margin-bottom: 1rem;
`;

const CardTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
`;

const Price = styled.p`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0 0 2rem 0;
    flex-grow: 1;
`;

const Feature = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1rem;
`;

const CheckIcon = styled.svg`
    width: 1.25rem;
    height: 1.25rem;
    color: #3b82f6;
    margin-right: 0.75rem;
    flex-shrink: 0;
`;

const Button = styled.button`
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;

    ${props => props.isPopular ? `
    background-color: #3b82f6;
    color: white;
    &:hover {
      background-color: #2563eb;
    }
  ` : `
    background-color: #e5e7eb;
    color: #1f2937;
    &:hover {
      background-color: #d1d5db;
    }
  `}
`;

const PricingSection = () => {
    return (
        <Section>
            <Title>Plans & Pricing</Title>
            <Subtitle>The tool is 100% free! This is just a generic section.</Subtitle>

            <CardsContainer>
                <PricingCard
                    title="Basic"
                    price="Free"
                    features={[
                        "Choose any color",
                        "Export all you want"
                    ]}
                    buttonText="Get Started"
                />
                <PricingCard
                    title="Pro"
                    price="$0.00 / month"
                    features={[
                        "Choose any color",
                        "Export all you want",
                        "Get a big thank you for checking this site out",
                        "Get access to dashboard"
                    ]}
                    buttonText="Go to Dashboard"
                    isPopular={true}
                />
                <PricingCard
                    title="Enterprise"
                    price="$0.00 / month"
                    features={[
                        "Choose any color",
                        "Export all you want",
                        "Get a big thank you for checking this site out",
                        "Get access to dashboard",
                        "Super duper exclusive members-only content."
                    ]}
                    buttonText="Learn more"
                />
            </CardsContainer>
        </Section>
    );
};

const PricingCard = ({title, price, features, buttonText, isPopular = false}) => {
    return (
        <Card isPopular={isPopular}>
            {isPopular && <PopularBadge>Most Popular</PopularBadge>}
            <CardTitle>{title}</CardTitle>
            <Price>{price}</Price>
            <FeatureList>
                {features.map((feature, index) => (
                    <Feature key={index}>
                        <CheckIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                                   strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 13l4 4L19 7"/>
                        </CheckIcon>
                        {feature}
                    </Feature>
                ))}
            </FeatureList>
            <Button isPopular={isPopular}>{buttonText}</Button>
        </Card>
    );
};

export default PricingSection;