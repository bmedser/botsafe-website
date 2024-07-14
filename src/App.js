import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import SplashScreen from './components/SplashScreen';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import GetStartedPage from "./components/GetStartedPage";
// Font
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <SplashScreen />
                        <AboutSection />
                        <FeaturesSection />
                        <PricingSection />
                        <Footer />
                    </>
                } />
                <Route path="/get-started" element={<GetStartedPage />} />
            </Routes>
        </Router>
    );
}

export default App;