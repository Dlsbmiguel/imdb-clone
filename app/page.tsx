import Results from "@/components/Results";
import { getMovies } from "@/lib/tmdb-api-calls";
import type { Metadata } from "next";
//export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "IMDb Clone | Home",
  description: "A clone of the IMDb website.",
  icons: {
    icon: { url: "next.svg", type: "image/svg" },
    shortcut: { url: "next.svg", type: "image/svg" },
  },
};

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const genre = searchParams?.genre || "fetchTrending";
  const res = await getMovies(genre);

  if (!res.results) {
    throw new Error("Failed to fetch data");
  }

  return (
    <main>
      <Results movies={res.results} />
    </main>
  );
}
