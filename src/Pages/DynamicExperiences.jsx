// import  { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addExperience } from "../features/experiencesSlice";

// const DynamicExperiences = () => {
//   const [name, setName] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [experience, setExperience] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && photo && experience) {
//       dispatch(
//         addExperience({
//           name,
//           photo,
//           experience,
//         })
//       );
//       alert("Your experience has been shared!");
//       setName("");
//       setPhoto("");
//       setExperience("");
//     } else {
//       alert("Please fill in all fields!");
//     }
//   };

//   return (
//     <div>
//       <h2>Share Your Experience</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Photo URL:
//           <input
//             type="text"
//             value={photo}
//             onChange={(e) => setPhoto(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Experience:
//           <textarea
//             value={experience}
//             onChange={(e) => setExperience(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Submit Experience</button>
//       </form>
//     </div>
//   );
// };

// export default DynamicExperiences;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExperience } from "../features/experiencesSlice";
import "../styles/DynamicExperienceForm.css"

const DynamicExperiences = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [experience, setExperience] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && photo && experience) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(
          addExperience({
            name,
            photo: reader.result,
            experience,
          })
        );
        alert("Your experience has been shared!");
        setName("");
        setPhoto(null);
        setExperience("");
      };
      reader.readAsDataURL(photo);
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div>
      <h2>Share Your Experience</h2>
      <form onSubmit={handleSubmit}>
        <label className="experience-label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="experience-label">
          Photo:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            required
          />
        </label>
        <label className="experience-label">
          Experience:
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Experience</button>
      </form>
    </div>
  );
};

export default DynamicExperiences;