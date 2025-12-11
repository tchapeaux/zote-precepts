import { Howl } from "howler";

class AudioManager {
  constructor() {
    this.menuSound = null;
  }

  init() {
    if (!this.menuSound) {
      this.menuSound = new Howl({
        src: ["/menu-open.ogg"],
        volume: 0.4,
      });
    }
  }

  playMenuSound() {
    if (this.menuSound) {
      // Stop any currently playing instance to prevent overlap
      this.menuSound.stop();
      this.menuSound.seek(0.6);
      this.menuSound.play();
    }
  }

  cleanup() {
    if (this.menuSound) {
      this.menuSound.unload();
      this.menuSound = null;
    }
  }
}

// Export singleton instance
export default new AudioManager();
