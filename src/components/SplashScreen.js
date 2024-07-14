// src/components/SplashScreen.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/automation-video.mp4';

const SplashContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
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
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const GetStartedButton = styled(Link)`
  background-color: #4CAF50;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const SplashScreen = () => {
    return (
        <SplashContainer>
            <VideoBackground autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
            </VideoBackground>
            <Content>
                <Title>Bot Safe on OSRS</Title>
                <Subtitle>Bot Smart, Bot Safe</Subtitle>
                <GetStartedButton to="/get-started">Get Started</GetStartedButton>
            </Content>
        </SplashContainer>
    );
};

export default SplashScreen;