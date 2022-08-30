import React from 'react';
import Typewriter from 'typewriter-effect';

import '../App.css';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import peaImg from '../media/PEA.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="main-background">
      <Navbar />
      <div className="container">
        <img className="home-bg-img" src={peaImg} alt="PEA" />
        <div className="home-club-name">
          <Typewriter
            options={{
              autoStart: true,
              delay: 70,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Exeter Computing Club')
                .start();
            }}
          />
        </div>
      </div>
      <div className="home-about-bg">
        <div className="home-about-block">
          <h1 className="home-about-header">About</h1>
          <p className="welcome-text">
            Welcome to the Exeter Computing Club, PEA&rsquo;s central technology community! We welcome all PEA students, regardless of prior knowledge or experience. Whether you want weekly lessons on the USACO competition, help on CS coursework, collaborators for your personal project, or teammates for a Hackathon, ECC is the club to join!
          </p>
        </div>
        <div className="home-about-block">
          <h1 className="home-about-header">Coheads</h1>
          <ul className="welcome-text">
            <li>Celine Tan</li>
            <li>Michael Chen</li>
            <li>Joey Dong</li>
            <li>Nathan Khuu</li>
            <li>Anish Mudide</li>
            <li>Sophia Zhang</li>
            <li>Riya Tyagi</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
