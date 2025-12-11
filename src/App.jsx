import "./App.css";

import { useState } from "react";
import DecorativeSpecks from "./DecorativeSpecks";
import PreceptSelector from "./PreceptSelector";
import OnePrecept from "./OnePrecept";
import MusicButton from "./MusicButton";

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="App">
        <DecorativeSpecks />

        <header>
          {selected === null && (
            <blockquote class="stone-tablet-card">
              <span>
                To what do I owe my long string of triumphs and victories, you
                ask?
              </span>
              <br />
              <span className="fade-1">
                The key is in my personal philosophy, the
              </span>
              <h1 className="fade-2">Fifty-Seven Precepts of Zote</h1>
            </blockquote>
          )}
        </header>

        <main>
          <OnePrecept
            key={selected}
            selected={selected}
            setSelected={setSelected}
          />
        </main>

        <PreceptSelector selected={selected} setSelected={setSelected} />
        <MusicButton />

        <footer>
          <p>Fan page not affiliated with Team Cherry</p>
        </footer>
      </div>
    </>
  );
}
