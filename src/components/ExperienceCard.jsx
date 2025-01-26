//import React from "react";
import PropTypes from "prop-types";
const ExperienceCard = ({ name, photo, experience }) => {
  return (
    <div className="experience-card">
      <img src={photo} alt={name} className="experience-photo" />
      <h3>{name}</h3>
      <p>{experience}</p>
    </div>
  );
};

ExperienceCard.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
  };

export default ExperienceCard;
