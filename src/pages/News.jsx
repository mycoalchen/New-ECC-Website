import React from 'react';

import '../App.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/News.css';
import july2img from '../media/dfsbfs.jpeg';

function News() {
  return (
    <div className="main-background">
      <Navbar />
      <h1 className="news-header">July 2, 2022</h1>
      <p className="news-paragraph">
        ECC had a great time today preparing for the upcoming USACO contests. We learned about graphs, connected components, depth-first-search, and breadth-first-search.
        <img src={july2img} alt="board from today`s meeting" />
      </p>
      <hr className="news-hr" />
      <h1 className="news-header">Feburary 3, 2023</h1>
      <p className="news-paragraph">
        We&apos;re sending teams to attend the MIT Blueprint hackathon! The event runs on February 18th/19th; transporation will be covered.
      </p>
      <hr className="news-hr" />
      <Footer />
    </div>
  );
}

export default News;
