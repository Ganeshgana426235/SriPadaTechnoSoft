import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Navbar from './assets/Components/Navbar/Navbar';
import Home from './assets/Components/Home/Home';
import Footer from './assets/Components/Footer/Footer';
import Courses from './assets/Components/Courses/Courses';
import ContactUs from './assets/Components/Contact Us/ContactUs';
import JobUpdates from './assets/Components/JobUpdates/JobUpdates';
import Internship from './assets/Components/Internship/Internship';

const App = () => {
    return (
        <Router> 
            <div>
                <Navbar />
                <Routes> 
                    <Route path="/" element={<Home />} /> 
                    <Route path="/courses" element={<Courses />}/>
                    <Route path="/contactus" element={<ContactUs />}/>
                    <Route path="/jobupdates" element={<JobUpdates />}/>
                    <Route path="/internship" element={<Internship />}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;