import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "a-ta-01m2p82g9nx19k1fr7mrmdkp2s-z1fsyjsfph4lb8k8qot7kwa4s.w.modal.host",
    port: 3000,
    strictPort: true,
  },
});
