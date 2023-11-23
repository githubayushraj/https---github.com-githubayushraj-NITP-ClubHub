import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Navbar from './Navbar';
import Home from './Home';
import Aboutus from './Aboutus';
import Event from './Event';
import Sponsor from './Sponsor';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/event" element={<Event />} />
        <Route path="/sponsor" element={<Sponsor />} />
      </Routes>
    </>
  );
};

export default App;



