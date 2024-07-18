// App.js
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
import Fab from './Components/Fab'; // Import the Fab component

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home title="Home" />} />
                <Route exact path="/team" element={<Team title="Our Team" />} />
                <Route exact path="/services" element={<Services title="Services" />} />
                <Route exact path="/careers" element={<Careers title="Careers" />} />
                <Route exact path="/company" element={<Company title="Company" />} />
                <Route exact path="/portfolio" element={<Portfolio title="Portfolio" />} />
                <Route exact path="/contact" element={<Contact title="Contact Us" />} />
            </Routes>
            <Footer />
            <Fab /> {/* Add the Fab component here */}
        </Router>
    );
}

export default App;
