import { HttpAdapter } from '~/config/adapters/http/http.adapter';
import type { Movie } from '~/core/entities/movie.entity';
import type { MovieDBMoviesResponse } from '~/infraestructure/interfaces/movie-db.responses';
import { MovieMapper } from '~/infraestructure/mappers/movie.mapper';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieDBMoviesResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
      },
    });

    return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - PopularUseCase');
  }
};
