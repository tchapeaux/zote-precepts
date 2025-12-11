import PRECEPTS from "../assets/precepts.json";

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
              <button className="prev-btn" onClick={() => setSelected(selected - 1)}>
                <i class="lni lni-arrow-left" />
              </button>
            ) : null}
            {selected < PRECEPTS.length - 1 ? (
              <button className="next-btn" onClick={() => setSelected(selected + 1)}>
                <i class="lni lni-arrow-right" />
              </button>
            ) : null}
          </div>
        </>
      ) : (
        <button onClick={() => setSelected(0)}>First Precept</button>
      )}
    </main>
  );
}
