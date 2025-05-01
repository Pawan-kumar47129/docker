import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(env),
      'process.env': {
        VITE_API_END_POINT: JSON.stringify(env.VITE_API_END_POINT || 'http://localhost:5000/api/v1/user'),
        VITE_AUTHORIZATION_TOKEN: JSON.stringify(env.VITE_AUTHORIZATION_TOKEN || ''),
        VITE_TOP_RATED_MOVIE_URL: JSON.stringify(env.VITE_TOP_RATED_MOVIE_URL || ''),
        VITE_UPCOMING_MOVIE_URL: JSON.stringify(env.VITE_UPCOMING_MOVIE_URL || ''),
        VITE_POPULAR_MOVIE_URL: JSON.stringify(env.VITE_POPULAR_MOVIE_URL || ''),
        VITE_NOW_PLAYING_URL: JSON.stringify(env.VITE_NOW_PLAYING_URL || ''),
        VITE_BANNER_URL: JSON.stringify(env.VITE_BANNER_URL || '')
      }
    },
    server: {
      host: true,
      // Development server port (only used during development)
      // In production, Nginx will serve the built files on port 80
      port: 5173,
      watch: {
        usePolling: true,
      },
    },
  }
})