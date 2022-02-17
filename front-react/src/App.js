import React, { useState } from "react";
import './styles/App.css';
import Axios from "axios";

function App() {
  /*const getVideo = () => {
    Axios.get("https://api.trace.moe/search?url=https://images.plurk.com/32B15UXxymfSMwKGTObY5e.jpg").then(
      (response) => {
        console.log(response);
      }
    );
  };*/
  return (
    <div className="App">
      <header>Anime quizz</header>
      <form>
        <div className="mediaUp">
          <input placeholder="Entrez l'url de l'image d'un anime à utiliser"/>
          <button /*onClick={getVideo}*/>Télécharge la vidéo</button>
        </div>

        <div className="question">
          <input placeholder="Entrer votre question"/>
          <input placeholder="Numéro de la bonne réponse"/>
        </div>

        <div className="answers">
          <input placeholder="Choix 1"/>
          <input placeholder="Choix 2"/>
          <input placeholder="Choix 3"/>
          <input placeholder="Choix 4"/>
        </div>

      </form>
    </div>
  );
}

export default App;
