
import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sleak",
    short_name: "Sleak",
    description: "",
    start_url: '/',
    dir: "auto",
    orientation: "any",
    lang: "en-GB",
    display: 'standalone',
    theme_color: "#000000",
    background_color: "#000000",
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
