import MovieCard from "@/components/MovieCard";
import Results from "@/components/Results";
import { getMoviesBySearchTerm } from "@/lib/tmdb-api-calls";
import { FC } from "react";

interface pageProps {
  params: {
    searchTerm: string;
  };
}

// @ts-expect-error Server Component
const SearchPage: FC<pageProps> = async ({ params }) => {
  const searchTerm = params.searchTerm;

  const res = await getMoviesBySearchTerm(searchTerm);

  // if (!res.success) {
  //   throw new Error("Error fetching data");
  // }

  const movies = res.results as Movie[];
  return (
    <div>
      {movies && movies.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {movies && movies.length > 0 && <Results movies={movies} />}
    </div>
  );
};

export default SearchPage;
