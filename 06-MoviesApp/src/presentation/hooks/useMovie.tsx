import React from 'react';

import { movieDBFetcher } from '~/config/adapters/movieDB.adapter';
import { type FullMovie } from '~/core/entities/movie.entity';
import { getMovieByIdUseCase } from '~/core/use-cases/movie/get-by-id.use-case';

export function useMovie(movieId: number) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [movie, setMovie] = React.useState<FullMovie>();

  React.useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);

    const fullMovie = await getMovieByIdUseCase(movieDBFetcher, movieId);
    setMovie(fullMovie);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
  };
}
