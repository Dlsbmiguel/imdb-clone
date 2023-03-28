import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FiThumbsUp } from "react-icons/fi";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="Movie Poster"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="">
          <p className="line-clamp-2">{movie.overview}</p>
          <h2 className="truncate font-bold">{movie.title || movie.name}</h2>
          <p className="flex">
            {movie.release_date || movie.first_air_date}
            <span>
              <FiThumbsUp className="h-5 ml-3 mr-1" />
            </span>
            <span>{movie.vote_count}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
