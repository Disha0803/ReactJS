import React from 'react'
import NavBar from './Navbar';
import MastHead from './MastHead';
import PortfolioSection from './ProtfolioSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Copyright from './Copyright';

const App = () =>{
    return(
        <div>
            <NavBar />
            <MastHead />
            <PortfolioSection />
            <AboutSection />
            <ContactSection />
            <Footer />
            <Copyright />
        </div> 
    );
};

export default App