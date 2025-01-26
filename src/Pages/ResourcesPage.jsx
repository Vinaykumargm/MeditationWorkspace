//import React from "react";
import "../styles/ResourcesPage.css"
const ResourcesPage = () => {
  const videos = [
    "https://www.youtube.com/embed/0fUcoZlSlzI?si=MrNYV-7zPnDwBTXV",
    "https://www.youtube.com/embed/7rL3bwWnHWo?si=PyRD6PHa0irRiGeo",
    "https://www.youtube.com/embed/HH_vb22adx0?si=07Bm18J4KjPvQMMu",
    "https://www.youtube.com/embed/2kEh2-fqG1s?si=4mBp67wFzzs5OS8R",
    "https://www.youtube.com/embed/uh7DizGthig?si=vfKv0LudW_wijKni",
    "https://www.youtube.com/embed/vKTe1i4jW5M?si=PFXewK145gUDR0KU",
    "https://www.youtube.com/embed/uAzvmOCEZI0?si=VH2eKMJ18J2a4v6h",
    "https://www.youtube.com/embed/XHC0QXku-Dk?si=J3AnEChM6EYW63gk",
    "https://www.youtube.com/embed/FXEvw87JsHU?si=766S3dgn_KMEo2fD",
    "https://www.youtube.com/embed/_JVWnhCJRE0?si=FvbbQNG2we81rpJl",
    "https://www.youtube.com/embed/uAzvmOCEZI0?si=VH2eKMJ18J2a4v6h",
    "https://www.youtube.com/embed/XHC0QXku-Dk?si=J3AnEChM6EYW63gk",
    "https://www.youtube.com/embed/FXEvw87JsHU?si=766S3dgn_KMEo2fD",
    "https://www.youtube.com/embed/_JVWnhCJRE0?si=FvbbQNG2we81rpJl",

  ];

  return (
    <div>
      <h2>Meditation Resources</h2>
      <div className="video-grid">
        {videos.map((url, index) => (
          <iframe
            key={index}
            src={url}
            title={`Meditation Video ${index + 1}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
