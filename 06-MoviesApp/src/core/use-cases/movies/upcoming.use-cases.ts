import { HttpAdapter } from '~/config/adapters/http/http.adapter';
import type { Movie } from '~/core/entities/movie.entity';
import type { MovieDBMoviesResponse } from '~/infraestructure/interfaces/movie-db.responses';
import { MovieMapper } from '~/infraestructure/mappers/movie.mapper';

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');

    return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - UpcomingUseCase');
  }
};
