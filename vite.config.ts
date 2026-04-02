import { defineConfig, searchForWorkspaceRoot } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Use repo subpath only on GitHub Actions (Pages); use root for Vercel/local.
  base: command === 'build' && process.env.GITHUB_ACTIONS ? '/travellog/' : '/',
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Keep default workspace root access for project files
        searchForWorkspaceRoot(process.cwd()),
        // Allow /@fs/... for Cursor-provided preview assets
        '/Users/newaccount/.cursor/projects/Users-newaccount-Documents-Travel-log-vibe-coding/assets',
      ],
    },
  },
}))
