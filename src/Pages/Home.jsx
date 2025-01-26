//import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import meditationImage from '../images/meditation.jpg';
import resourcesImage from '../images/resources.jpg';
import staticExperiencesImage from '../images/static-experiences.jpg';
import dynamicExperiencesImage from '../images/dynamic-experiences.jpg';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Meditation Workspace</h1>
      <div className="options">
        <Link to="/meditation" className="option">
          <img src={meditationImage}  alt="Meditation" />
          <p>Do Meditation</p>
        </Link>
        <Link to="/resources" className="option">
          <img src={resourcesImage} alt="Resources" />
          <p>Meditation Resources</p>
        </Link>
        <Link to="/static-experiences" className="option">
          <img src={staticExperiencesImage} alt="Static Experiences" />
          <p>See other Experiences</p>
        </Link>
        <Link to="/dynamic-experiences" className="option">
          <img src={dynamicExperiencesImage} alt="Dynamic Experiences" />
          <p>Share Your Experience</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
