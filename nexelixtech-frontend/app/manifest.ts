import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nexelix Tech",
    short_name: "Nexelix Tech",
    description: "Next-gen software solutions agency specializing in web apps, AI integration, and mobile engineering.",
    start_url: "/",
    display: "standalone",
    background_color: "#080b11",
    theme_color: "#080b11",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
