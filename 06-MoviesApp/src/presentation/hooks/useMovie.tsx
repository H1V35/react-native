import React from 'react';

import { movieDBFetcher } from '~/config/adapters/movieDB.adapter';
import { type Cast } from '~/core/entities/cast.entity';
import { type FullMovie } from '~/core/entities/movie.entity';
import { getMovieByIdUseCase } from '~/core/use-cases/movie/get-by-id.use-case';
import { getMovieCastUseCase } from '~/core/use-cases/movie/get-cast.use-case';

export function useMovie(movieId: number) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [movie, setMovie] = React.useState<FullMovie>();
  const [cast, setCast] = React.useState<Cast[]>([]);

  React.useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);

    const fullMoviePromise = getMovieByIdUseCase(movieDBFetcher, movieId);
    const castPromise = getMovieCastUseCase(movieDBFetcher, movieId);

    const [fullMovie, cast] = await Promise.all([fullMoviePromise, castPromise]);

    setMovie(fullMovie);
    setCast(cast);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
    cast,
  };
}
