import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InterestGroups from './pages/InterestGroups';
import FindADev from './pages/FindADev';
import News from './pages/News';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/interestgroups" element={<InterestGroups />} />
      <Route path="/findadev" element={<FindADev />} />
      <Route path="/news" element={<News />} />
    </Routes>
  </BrowserRouter>,
);
