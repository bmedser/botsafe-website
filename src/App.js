import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

// import Header from './components/Header';
import SplashScreen from './components/SplashScreen';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import GetStartedPage from "./components/GetStartedPage";
import CallToAction from './components/CallToAction';
import LegalPage from './components/LegalPage';

import './globalStyles.css';  // Import the global stylesheet


// Font
const GlobalStyle = createGlobalStyle`

    body {
        font-family: 'Poppins', sans-serif; /* Apply font */
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

/*.





 */
function App() {
    return (
        <Router>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={
                    <>
                        {/*<Header />*/}
                        <SplashScreen/>
                        <AboutSection/>
                        <FeaturesSection/>
                        <PricingSection/>
                        <CallToAction/>
                        <Footer/>
                    </>
                }/>
                <Route path="/legal" element={<LegalPage/>}/>
                <Route path="/get-started" element={<GetStartedPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;