import { getMovie } from "@/lib/tmdb-api-calls";
import Image from "next/image";
import { FC } from "react";

interface pageProps {
  params: {
    id: string;
  };
}

// @ts-expect-error Server Component
const page: FC<pageProps> = async ({ params }) => {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center justify-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="Movie poster"
          width={500}
          height={300}
          className="rounded-lg max-w-full h-full"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold">Overview:</span> {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold">Date released:</span>{" "}
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold">Rating:</span> {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
