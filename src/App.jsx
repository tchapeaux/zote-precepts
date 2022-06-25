import "./App.css";

import PRECEPTS from "../assets/precepts.json";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(0);

  const precept = PRECEPTS[selected];

  function setRandom() {
    const r = Math.round(Math.random() * (PRECEPTS.length - 1));
    setSelected(r);
  }

  return (
    <div className="App">
      <header>
        <h1>The Precepts of Zote</h1>
        <blockquote>
          To what do I owe my long string of trimphs and victories, you ask?
          [T]he key is in my personal philosophy, the 'Fifty-Seven Precepts of
          Zote'
        </blockquote>
      </header>
      <nav className="choose-precept">
        {PRECEPTS.map((p) => (
          <button
            className={p.idx === selected ? "selected" : undefined}
            key={p.idx}
            onClick={() => setSelected(p.idx)}
          >
            {p.idx + 1}
          </button>
        ))}
        <button onClick={setRandom}>🎲</button>
      </nav>
      <main className="one-precept">
        <p className="prcpt-nbr" style={{ marginBottom: 0 }}>
          {precept.nbr}
        </p>
        <p className="prcpt-title">{precept.title}</p>
        <p className="prcpt-text">{precept.text}</p>
      </main>
      <footer>All texts are the property of Team Cherry</footer>
    </div>
  );
}

export default App;
