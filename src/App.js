import React from 'react';
import Home from './Home';
import Navbar from './Components/Navbar';
import Contact from './contact/Contact';
import Team from './ourteam/Team';
import Services from './ourservices/Services';
import Careers from './careers/Careers';
import Portfolio from './portfolio/Portfolio';
import Footer from './Footer';
import Company from './ourcompany/Company';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    
                    <Route exact path="/team" element={<Team />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/careers" element={<Careers />} />
                    <Route exact path="/company" element={<Company />} />
                    <Route exact path="/portfolio" element={<Portfolio />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
                < Footer />
            </Router>
        </>

    );
}
export default App;