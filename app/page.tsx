import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMDb Clone | Home",
  description: "A clone of the IMDb website.",
  icons: {
    icon: { url: "/imdbicon.png", type: "image/png" },
    shortcut: { url: "/imdbicon.png", type: "image/png" },
  },
};

export default function Home() {
  return <main></main>;
}
