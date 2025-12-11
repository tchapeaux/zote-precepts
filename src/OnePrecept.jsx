import PRECEPTS from "../assets/precepts.json";

import { ArrowLeft, ArrowRight } from "@gravity-ui/icons";

import "./OnePrecept.css";

export default function OnePrecept({ selected, setSelected }) {
  const precept = PRECEPTS[selected] || null;

  return (
    <main className="one-precept">
      {precept ? (
        <>
          <p className="prcpt-nbr" style={{ marginBottom: 0 }}>
            - {precept.nbr} -
          </p>
          <p className="prcpt-title">{precept.title}</p>
          <p className="prcpt-text">{precept.text}</p>

          <div className="prev-next-section">
            {selected > 0 ? (
              <button
                className="prev-btn"
                onClick={() => setSelected(selected - 1)}
              >
                <ArrowLeft height={40} width={40} />
              </button>
            ) : null}
            {selected < PRECEPTS.length - 1 ? (
              <button
                className="next-btn"
                onClick={() => setSelected(selected + 1)}
              >
                <ArrowRight height={40} width={40} />
              </button>
            ) : null}
          </div>
        </>
      ) : (
        <button className="first-prcpt" onClick={() => setSelected(0)}>
          First Precept
        </button>
      )}
    </main>
  );
}
