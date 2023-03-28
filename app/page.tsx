import Results from "@/components/Results";
import type { Metadata } from "next";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "IMDb Clone | Home",
  description: "A clone of the IMDb website.",
  icons: {
    icon: { url: "next.svg", type: "image/svg" },
    shortcut: { url: "next.svg", type: "image/svg" },
  },
};

const apiKey = process.env.TMDB_API_KEY!;

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const genre = searchParams?.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${apiKey}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const results = data.results;

  return (
    <main>
      <Results movies={results} />
    </main>
  );
}
