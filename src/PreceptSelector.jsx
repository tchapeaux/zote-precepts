import { useState } from "react";
import classNames from "classnames";

import { Bars, Xmark, Dice5, House } from "@gravity-ui/icons";

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
              p.idx === selected ? null : p.idx,
            )}
          >
            {p.idx + 1}
          </button>
        ))}
        <button onClick={setRandom}>
          <Dice5 width={27} height={27} />
        </button>
      </nav>
      <button className={`toggle-open-btn`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <Xmark height={40} width={40} />
        ) : (
          <Bars height={40} width={40} />
        )}
      </button>
      {selected !== null && (
        <button
          className={`home-btn`}
          onClick={() => {
            setSelected(null);
            setIsOpen(false);
          }}
        >
          <House height={40} width={40} />
        </button>
      )}
    </>
  );
}
