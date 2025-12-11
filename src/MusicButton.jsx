import { useState, useEffect, useRef } from "react";
import { Howl, Howler } from "howler";

import { Volume, VolumeXmark } from "@gravity-ui/icons";

import "./MusicButton.css";

export default function MusicButton() {
  const [isMuted, setIsMuted] = useState(true);
  const bgmRef = useRef(null);

  // Initialize background music
  useEffect(() => {
    bgmRef.current = new Howl({
      src: ["/bgm.mp3"],
      loop: true,
      volume: 0.5,
    });

    // Start playing but muted (to avoid browser autoplay restrictions)
    bgmRef.current.play();
    Howler.mute(true);

    // Cleanup on unmount
    return () => {
      if (bgmRef.current) {
        bgmRef.current.stop();
        bgmRef.current.unload();
      }
    };
  }, []);

  function toggle() {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    Howler.mute(newMutedState);
  }

  return (
    <button className="music-toggle" onClick={toggle}>
      {isMuted ? (
        <VolumeXmark width={40} height={40} />
      ) : (
        <Volume width={40} height={40} />
      )}
    </button>
  );
}
