import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/deployed-ObsidianBH/",
  optimizeDeps: {
      include: [
          "@mui/material/Tooltip",
          "@emotion/styled",
          "@mui/icons-material",
          "@mui/material/Unstable_Grid2",
      ],
  },
})
