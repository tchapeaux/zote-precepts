import { useState } from "react";
import classNames from "classnames";

import PRECEPTS from "../assets/precepts.json";

import "./PreceptSelector.css";

export default function PreceptSelector({ selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  function onSelectPrecept(preceptValue) {
    setIsOpen(false);
    setSelected(preceptValue);
  }

  function setRandom() {
    const r = Math.round(Math.random() * (PRECEPTS.length - 1));
    onSelectPrecept(r);
  }

  return (
    <>
      <nav className={classNames(`choose-precept`, { opened: !!isOpen })}>
        {PRECEPTS.map((p) => (
          <button
            className={p.idx === selected ? "selected" : undefined}
            key={p.idx}
            onClick={onSelectPrecept.bind(
              null,
              p.idx === selected ? null : p.idx
            )}
          >
            {p.idx + 1}
          </button>
        ))}
        <button onClick={setRandom}>🎲</button>
      </nav>
      <button className={`toggle-open-btn`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <i class="lni lni-cross-circle" />
        ) : (
          <i class="lni lni-menu" />
        )}
      </button>
    </>
  );
}
