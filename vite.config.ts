import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  //! TanStackRouterVite must be passed at first position | plugins[0]=TanStackRouterVite
  plugins: [TanStackRouterVite({ target: 'react', autoCodeSplitting: true }), tailwindcss(), react()],
})
