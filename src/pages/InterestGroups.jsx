import React from 'react';

import '../App.css';
import Navbar from '../Components/Navbar';
import '../styles/InterestGroups.css';

function InterestGroups() {
  return (
    <div className="main-background">
      <Navbar />
      <div className="interest-groups-description">
        The ECC consists of several different interest groups, as described below.
      </div>
      <div className="interest-group-card">
        <h1 className="interest-group-card-header">Competition Group</h1>
        <p>
          The competition group meets weekly to practice for the USACO programming
          olympiad.
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
          The project group builds websites, apps, and other tools to help the PEA
          community. Its current project is a website displaying an interactive map of
          PEA&apos;s courses.
        </p>
        <a
          href="https://github.com/ECC-Project-Group/ExeterCourseMap"
          target="_blank"
          className="interest-group-link"
          rel="noreferrer"
        >
          Open the ExeterCourseMap repo here!
        </a>
        <p>Group leaders: Michael Chen, Riya Tyagi, Tanish Tyagi</p>
      </div>
      <div className="interest-group-card">
        <h1 className="interest-group-card-header">PCB Group</h1>
        <p>The PCB group meets weekly to discuss and learn about printed circuit boards.</p>
        <p>Group leaders: Byran Huang</p>
      </div>
    </div>
  );
}

export default InterestGroups;
