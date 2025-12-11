import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      // Custom fonts.
      custom: {
        families: [
          {
            name: "Cormorant",
            src: "./assets/Cormorant-VariableFont_wght.ttf",
          },
          {
            name: "Cormorant",
            src: "./assets/Cormorant-Italic-VariableFont_wght.ttf",
            style: "italic",
          },
        ],
        display: "auto",
        preload: true,
      },
    }),
  ],
});
