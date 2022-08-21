import React from 'react';

import '../App.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/News.css';

function News() {
  return (
    <div className="main-background">
      <Navbar />
      <h1 className="news-header">July 2, 2022</h1>
      <p className="news-paragraph">
        Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not.
        {' '}
        <br />
        {' '}
        It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life…
        <br />
        He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did.
        <br />
        Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.
      </p>
      <hr className="news-hr" />
      <h1 className="news-header">June 31, 2022</h1>
      <p className="news-paragraph">
        All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy.
      </p>
      <hr className="news-hr" />
      <Footer />
    </div>
  );
}

export default News;
