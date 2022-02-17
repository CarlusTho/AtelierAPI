import React, { useState } from "react";
import './App.css';
import Axios from "axios";

function App() {
  const getVideo = () => {
    Axios.get("https://api.trace.moe/search?url=https://images.plurk.com/32B15UXxymfSMwKGTObY5e.jpg").then(
      (response) => {
        console.log(response);
        setVideo(response.)
      }
    );
  };
  return (
    <div className="App">
      <form>
        <div id="mediaUp">
          <input> Entrez l'image de l'animé à utiliser </input>
          <button onClick={getVideo}>Télécharge la vidéo</button>
        </div>
        <input> Entrez votre question </input>
        <input> Choix 1 </input>
        <input> Choix 2 </input>
        <input> Choix 3 </input>
        <input> Choix 4 </input>
        
      </form>
    </div>
  );
}

export default App;
