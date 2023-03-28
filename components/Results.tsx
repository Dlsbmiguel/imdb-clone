import { FC } from "react";

interface ResultsProps {
  movies: Movie[];
}

const Results: FC<ResultsProps> = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.original_title}</div>
      ))}
    </div>
  );
};

export default Results;
