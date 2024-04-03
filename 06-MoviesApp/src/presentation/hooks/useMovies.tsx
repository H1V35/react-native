import React from 'react';

import { movieDBFetcher } from '~/config/adapters/movieDB.adapter';
import type { Movie } from '~/core/entities/movie.entity';
import { moviesNowPlayingUseCase } from '~/core/use-cases/movies/now-playing.use-cases';
import { moviesPopularUseCase } from '~/core/use-cases/movies/popular.use-cases';
import { moviesTopRatedUseCase } from '~/core/use-cases/movies/top-rated.use-cases';
import { moviesUpcomingUseCase } from '~/core/use-cases/movies/upcoming.use-cases';

export function useMovies() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [nowPlaying, setNowPlaying] = React.useState<Movie[]>([]);
  const [popular, setPopular] = React.useState<Movie[]>([]);
  const [topRated, setTopRated] = React.useState<Movie[]>([]);
  const [upcoming, setUpcoming] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = moviesNowPlayingUseCase(movieDBFetcher);
    const popularPromise = moviesPopularUseCase(movieDBFetcher);
    const topRatedPromise = moviesTopRatedUseCase(movieDBFetcher);
    const upcomingPromise = moviesUpcomingUseCase(movieDBFetcher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
  };
}
