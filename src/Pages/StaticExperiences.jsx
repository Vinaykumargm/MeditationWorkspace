//import React from "react";
import { useSelector } from "react-redux";
import ExperienceCard from "../components/ExperienceCard";
import john from "../images/john.jpg"
import jane from "../images/jane.jpg"
import "../styles/ExperienceCard.css"

const StaticExperiences = () => {
  // Static data for experiences (you can replace this with actual static content or data)
  const dynamicExperiences = useSelector((state) => state.experiences || []);
  const staticExperiences = [
    {
      name: "John Doe",
      photo: john,
      experience:
        "Meditation helped me to find inner peace and calm. It was an amazing experience.",
    },
    {
      name: "Jane Smith",
      photo: jane,
      experience:
        "I started meditation to reduce stress. The results were truly life-changing.",
    },
    {
      name: "John Doe",
      photo: john,
      experience:
        "Meditation helped me to find inner peace and calm. It was an amazing experience.",
    },
    {
      name: "John Doe",
      photo: john,
      experience:
        "Meditation helped me to find inner peace and calm. It was an amazing experience.",
    },
    {
      name: "Jane Smith",
      photo: jane,
      experience:
        "I started meditation to reduce stress. The results were truly life-changing.",
    },
    {
      name: "John Doe",
      photo: john,
      experience:
        "Meditation helped me to find inner peace and calm. It was an amazing experience.",
    },
  ];
  const allExperiences = [...staticExperiences, ...dynamicExperiences];
  return (
    <div>
      <div className="experience-grid">
        {allExperiences.map((exp, index) => (
          <ExperienceCard className="experience-card"
            key={index}
            name={exp.name}
            photo={exp.photo}
            experience={exp.experience}
          />
        ))}
      </div>
    </div>
  );
};

export default StaticExperiences;
