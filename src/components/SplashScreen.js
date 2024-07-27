import React from 'react';
import styled from 'styled-components';
import backgroundVideo from '../assets/automation-video.mp4';
import botSafeSVG from '../assets/fresh_botsafe.svg';

const SplashContainer = styled.div`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Poppins', sans-serif; /* Apply the font here */

`;

const VideoBackground = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translateX(-50%) translateY(-50%);
    z-index: -1;
    filter: brightness(50%);
`;

const Content = styled.div`
    text-align: center;
    color: white;
    width: 90%;
    max-width: 1200px;
    z-index: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoContainer = styled.div`
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:     4rem;
    //margin-bottom: 2rem;
    width: 45%;
    max-width: 300px;
    min-width: 100px; // Ensure logo doesn't become too small on mobile
`;
const LogoImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
    filter: drop-shadow(0 0 10px white);
    animation: glow 3s infinite alternate;

    @keyframes glow {
        0% {
            filter: drop-shadow(0 0 2px white);
        }
        50% {
            filter: drop-shadow(0 0 6px white);
        }
        100% {
            filter: drop-shadow(0 0 2px white);
        }
    }
`;

const TextContent = styled.div`
    margin-top: 1rem;
`;

const Title = styled.p`
    font-size: 1.25rem;
    margin-top: 4rem;
    font-weight: 400;
    color: rgba(153, 153, 153, 0.68);
    margin-bottom: 3rem;
`;

const Subtitle = styled.h3`
    font-size: 1.5rem;    
    
    margin-top: 6rem;
    color: #eee;
    text-shadow: 3px 3px 3px rgba(0,0,0,0.3);
`;

// const FeaturesContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
//     gap: 2rem;
//     margin-top: 2rem;
// `;
//
// const Feature = styled.div`
//     text-align: center;
//     flex: 1 1 250px;
//     min-width: 250px;
//     max-width: 300px;
// `;
//
// const FeatureIcon = styled(FontAwesomeIcon)`
//     font-size: 2.5rem;
//     margin-bottom: 1rem;
// `;
//
// const FeatureTitle = styled.h3`
//     font-size: 1.5rem;
//     margin-bottom: 0.5rem;
// `;
//
// const FeatureDescription = styled.p`
//     font-size: 1rem;
// `;

const SplashScreen = () => {
    return (
        <SplashContainer>
            <VideoBackground autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4"/>
            </VideoBackground>
            <Content>
                <LogoContainer>
                    <LogoImage src={botSafeSVG} alt="BotSafe"/>
                </LogoContainer>
                <TextContent>
                    <Title>The Safe OSRS Bot</Title>
                    <Subtitle>Forget the Worry of Being Banned: Experience Safe and Intelligent OSRS Botting with
                        Advanced AI</Subtitle>
                </TextContent>
                {/*<FeaturesContainer>*/}
                {/*    <Feature>*/}
                {/*        <FeatureIcon icon={faShield}/>*/}
                {/*        <FeatureTitle>Secure</FeatureTitle>*/}
                {/*        <FeatureDescription>Unrivaled anti-ban technology ensures complete safety for your*/}
                {/*            account.</FeatureDescription>*/}
                {/*    </Feature>*/}
                {/*    <Feature>*/}
                {/*        <FeatureIcon icon={faRobot}/>*/}
                {/*        <FeatureTitle>Intelligent</FeatureTitle>*/}
                {/*        <FeatureDescription>Advanced AI integration provides a seamless and human-like gameplay*/}
                {/*            experience.</FeatureDescription>*/}
                {/*    </Feature>*/}
                {/*    <Feature>*/}
                {/*        <FeatureIcon icon={faClock}/>*/}
                {/*        <FeatureTitle>Friendly Support</FeatureTitle>*/}
                {/*        <FeatureDescription>Don't worry about being stuck, help is here!</FeatureDescription>*/}
                {/*    </Feature>*/}
                {/*</FeaturesContainer>*/}
            </Content>
        </SplashContainer>
    );
};

export default SplashScreen;