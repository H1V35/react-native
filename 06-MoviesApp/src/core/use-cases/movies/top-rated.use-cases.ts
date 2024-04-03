import { HttpAdapter } from '~/config/adapters/http/http.adapter';
import type { Movie } from '~/core/entities/movie.entity';
import type { MovieDBMoviesResponse } from '~/infraestructure/interfaces/movie-db.responses';
import { MovieMapper } from '~/infraestructure/mappers/movie.mapper';

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MovieDBMoviesResponse>('/top_rated');

    return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - TopRatedUseCase');
  }
};
