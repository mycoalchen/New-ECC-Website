import React from 'react';

import {
  Heading,
} from '@chakra-ui/react';

import '../App.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/InterestGroups.css';

function InterestGroups() {
  return (
    <div className="main-background">
      <Navbar />
      <Heading fontWeight="normal" fontSize="2xl" margin="auto" maxWidth="50vw" textAlign="center" paddingY="2vh">
        The ECC consists of several different interest groups, as described
        below.
      </Heading>
      <div className="interest-group-card">
        <h1 className="interest-group-card-header">Competition Group</h1>
        <p>
          The competition group meets weekly to practice for the USACO
          programming olympiad.
        </p>
        <p>Group leaders: Joey Dong, Anish Mudide</p>
      </div>
      <div className="interest-group-card">
        <h1 className="interest-group-card-header">ML Group</h1>
        <p>The ML group meets weekly to discuss and learn about machine learning.</p>
        <p>Group leaders: Anish Mudide, Sophia Zhang</p>
      </div>
      <div className="interest-group-card">
        <h1 className="interest-group-card-header">Project Group</h1>
        <p>
          The project group builds websites, apps, and other tools to help the
          PEA community. Its current project is a website displaying an
          interactive map of PEA&apos;s courses.
        </p>
        <a
          href="https://github.com/ECC-Project-Group/ExeterCourseMap"
          target="_blank"
          className="interest-group-link"
          rel="noreferrer"
        >
          Open the ExeterCourseMap repo here!
        </a>
        <p>
          Let us know if you&rsquo;re interested in joining! We&rsquo;re open to beginners too.
        </p>
        <p>Group leaders: Michael Chen, Riya Tyagi, Tanish Tyagi</p>
      </div>
      <div className="interest-group-card">
        <h1 className="interest-group-card-header">PCB Group</h1>
        <p>The PCB group meets weekly to discuss and learn about printed circuit boards.</p>
        <p>Group leaders: Byran Huang</p>
      </div>
      <Footer />
    </div>
  );
}

export default InterestGroups;
