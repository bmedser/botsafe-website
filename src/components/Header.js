// Header.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// botsafe icon
import botSafeIcon from '../assets/botsafe_icon.svg';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  //background-color: rgba(18, 18, 18, 0.8);
  background-color: rgba(244, 244, 244, 0.8);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  z-index: 1000;
`;

const Logo = styled.h1`
  color: #ffffff;
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.img`
  width: 32px; /* Adjust size as needed - was 24px*/
  height: 32px; /* Adjust size as needed */
  margin-right: 0.5rem; /* Space between icon and text */
filter: drop-shadow(0 0 10px rgba(200, 200, 200, 0.3)); /* Glow effect */
filter: brightness(200%);
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #3f51b5;
  }
`;

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <HeaderContainer style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
            <Logo>
                <LogoIcon src={botSafeIcon} alt="BotSafe Icon" />
                {/*BotSafe*/}
            </Logo>
            <Nav>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#features">Features</NavLink>
                {/*<NavLink href="#pricing">Pricing</NavLink>*/}
                <NavLink href="#contact">Contact</NavLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;