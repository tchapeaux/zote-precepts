import { useRef } from "react";
import "./DecorativeSpecks.css";
import { useEffect } from "react";
import { useCallback } from "react";

function makeSpeck() {
  const speck = document.createElement("div");
  speck.classList.add("speck");
  if (Math.random() < 0.05) {
    speck.classList.add("gold");
  }
  const x =
    Math.random() > 0.8 ? -0.1 * window.innerWidth : 0.5 * window.innerWidth;
  const y = (Math.random() - 0.1) * window.innerHeight;
  const dx = Math.random() * 2 * window.innerWidth;
  const dy = Math.random() * 400;
  const speed = 10 + Math.random() * 40;
  const size = 2 + Math.random() * 8;
  speck.setAttribute(
    "style",
    `--pos-x: ${x}px; --pos-y: ${y}px; --trans-x: ${dx}px; --trans-y: ${dy}px; --speed: ${speed}s; --size:${size}px`,
  );
  return speck;
}

export default function DecorativeSpecks() {
  const layer1 = useRef();
  const layer2 = useRef();

  const addSpeckTo1 = useCallback(() => {
    if (layer1.current) {
      const speck = makeSpeck();
      speck.addEventListener("animationend", () => {
        layer1.current.removeChild(speck);
        addSpeckTo1();
      });

      layer1.current.appendChild(speck);
    }
  }, [layer1]);

  const addSpeckTo2 = useCallback(() => {
    if (layer2.current) {
      const speck = makeSpeck();
      speck.addEventListener("animationend", () => {
        layer2.current.removeChild(speck);
        addSpeckTo1();
      });

      layer2.current.appendChild(speck);
    }
  }, [layer2]);

  useEffect(() => {
    if (layer1.current && layer2.current) {
      for (const _ of [...Array(100).keys()]) {
        addSpeckTo1();
      }

      for (const _ of [...Array(500).keys()]) {
        addSpeckTo2();
      }
    }

    return () => {
      // Cleanup
      while (layer1.current.firstChild) {
        layer1.current.removeChild(layer1.current.firstChild);
      }
      while (layer2.current.firstChild) {
        layer2.current.removeChild(layer2.current.firstChild);
      }
    };
  }, [layer1, layer2]);

  return (
    <div className="decorative-wrapper">
      <div className="layer layer-1" ref={layer1}></div>
      <div className="layer layer-2" ref={layer2}></div>
    </div>
  );
}
