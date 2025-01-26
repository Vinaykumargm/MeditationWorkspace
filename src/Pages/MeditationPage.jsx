import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import  calm from "../audios/another.mp3"
import  ocean from "../audios/ocean.mp3"
import  birds from "../audios/night-birds.mp3"
import "../styles/mcss.css"
const MeditationPage = () => {
  const [minutes, setMinutes] = useState(0);
  const [music, setMusic] = useState("");
  const [isMeditating, setIsMeditating] = useState(false);
  const [audio, setAudio] = useState(null);

  const startMeditation = () => {
    if (minutes > 0 && music) {
      setIsMeditating(true);
      const audioElement = new Audio(music);
      setAudio(audioElement);
      audioElement.play();

      setTimeout(() => {
        stopMeditation();
        alert("Meditation Complete!");
      }, minutes * 60000);
    } else {
      alert("Please select a time and music!");
    }
  };

  const stopMeditation = () => {
    if (audio) {
      audio.pause();
      setAudio(null);
    }
    setIsMeditating(false);
  };

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [audio]);

  return (
    <div>
      <h2><pre>           Do Meditation       </pre></h2>
      {!isMeditating ? (
        <div className="options">
           <div className="option">
          <label>
            Minutes:
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
          </label>
          </div>
          <div className="option">
          <label>
            Music:
            <select value={music} onChange={(e) => setMusic(e.target.value)}>
              <option value="">Select Music</option>
              <option value={calm}>Calm Music</option>
              <option value={ocean}>Ocean Waves</option>
              <option value={birds}>Bird Sounds</option>
            </select>
          </label>
          </div>
          <div className="option">
          <button onClick={startMeditation}>Start Meditation</button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Meditation in Progress...</h3>
          <div className="blooming-animation"></div>
          <p>Please wait for the meditation to complete and dont close the page</p>
          <button onClick={stopMeditation}>Stop Meditation</button>
        </div>
      )}

      
    </div>
  );
};

export default MeditationPage;

