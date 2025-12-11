import { useState } from "react";
import useSound from "use-sound";

import { Volume, VolumeXmark } from "@gravity-ui/icons";

import "./MusicButton.css";

export default function MusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound("/bgm.mp3", {
    loop: true,
  });

  function toggle() {
    if (!isPlaying) {
      play();
    } else {
      stop();
    }

    setIsPlaying(!isPlaying);
  }

  return (
    <button className="music-toggle" onClick={toggle}>
      {isPlaying ? (
        <Volume width={40} height={40} />
      ) : (
        <VolumeXmark width={40} height={40} />
      )}
    </button>
  );
}
