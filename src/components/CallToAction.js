import React,  { useState, useEffect }  from 'react';
import styled , {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';

import '../globalStyles.css';
// Define the swooping keyframes for the animation
const swoopIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-30%);
    }
    50% {
        opacity: 1;
        transform: translateX(0);
    }
    100% {
        opacity: 0;
        transform: translateX(30%);
    }
`;

const CTAContainer = styled.div`
    background-color: rgba(245, 245, 245, 0.38);
    padding: 4rem 2rem;
    text-align: center;
`;

const CTATitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333;
    font-family: 'Poppins', sans-serif; /* Apply font */
    position: relative;
    height: 3rem; /* Adjust based on your font size and desired height */
    overflow: hidden; /* Hide overflow to keep the swoop effect within bounds */

    span {
        display: inline-block;
        transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }
`;

const SwappableWord = styled.span`
    display: inline-block;
    animation: ${swoopIn} 3s infinite;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const CTADescription = styled.p`
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #666;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Poppins', sans-serif; /* Apply font */
`;

const CTADescriptionItalic = styled(CTADescription)`
  font-family: 'PoppinsItalic', sans-serif; /* Apply font */
`;

const GetStartedButton = styled(Link)`
  background-color: royalblue;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #003399;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    background-color: #002b80;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(0);
  }
`;

const CallToAction = () => {
    const words = ['earn money', 'level up', 'max your main', 'skip the boring stuff', 'get all 99s'];
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change word every 3 seconds
        return () => clearInterval(interval);
    }, [words.length]);

    useEffect(() => {
        setCurrentWord(words[index]);
    }, [index, words]);

    return (
        <CTAContainer>
            <CTATitle>
                Ready to <SwappableWord>{currentWord}</SwappableWord> safely?
            </CTATitle>
            <CTADescription>
                Never will you have to worry about being banned again.
            </CTADescription>
            <CTADescriptionItalic>
                BotSafe was born out of frustration with existing botting software.
            </CTADescriptionItalic>
            <CTADescription>
                Our mission is to deliver a superior solution that seamlessly integrates advanced AI models,
                user-friendly features, and robust anti-ban measures. With BotSafe, experience precise human-like
                behavior and a secure botting environment.
            </CTADescription>
            {/*<CTADescriptionItalic>*/}
            {/*    Choose BotSafe for a smarter, safer, and more reliable botting experience.*/}
            {/*</CTADescriptionItalic>*/}


            <CTADescription>
                BotSafe is in the final process of being released officially. It will be released publically before 2025. Join our Discord before the official release to get the early bird special!
            </CTADescription>

            <CTADescription>
                Join a new passionate community!
            </CTADescription>



            <GetStartedButton to="https://discord.gg/XmhAZgmhJb">Join Discord</GetStartedButton>


        </CTAContainer>
    );
};

export default CallToAction;