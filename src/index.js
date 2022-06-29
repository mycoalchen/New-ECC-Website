import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import InterestGroups from './pages/InterestGroups';
import FindADev from './pages/FindADev';
import News from './pages/News';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="about" element={<About />} />
        <Route path="interestgroups" element={<InterestGroups />} />
        <Route path="findadev" element={<FindADev />} />
        <Route path="news" element={<News />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
