import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "a-ta-01m2p82g9nx19k1fr7mrmdkp2s-z1fsyjsfph4lb8k8qot7kwa4s.w.modal.host",
    port: 3000,
    strictPort: true,
    // Alloy serves the app through a proxy on an arbitrary sandbox hostname,
    // so the dev server must not reject requests by Host header.
    allowedHosts: true,
  },
});
