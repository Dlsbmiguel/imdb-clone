const apiKey = process.env.TMDB_API_KEY!;

export const getMovie = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  );

  const data = await res.json();
  return data;
};

export const getMovies = async (genre: string | string[]) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${apiKey}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  return data;
};

export const getMoviesBySearchTerm = async (query: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&include_adult=false`
  );

  const data = await res.json();
  return data;
};
