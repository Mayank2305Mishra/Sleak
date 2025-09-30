import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SLEAK",
    short_name: "Sleak",
    description: "AI based productiviy app",
    start_url: '/',
    dir: "auto",
    orientation: "any",
    lang: "en-GB",
    display: 'standalone',
    theme_color:"#262527",
    background_color:"#ffffff",
    icons: [
      {
        src: '/icon512_maskable.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon512_rounded.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}