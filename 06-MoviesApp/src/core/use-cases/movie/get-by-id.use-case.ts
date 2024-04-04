import { HttpAdapter } from '~/config/adapters/http/http.adapter';
import { type FullMovie } from '~/core/entities/movie.entity';
import { type MovieDBMovie } from '~/infraestructure/interfaces/movie-db.responses';
import { MovieMapper } from '~/infraestructure/mappers/movie.mapper';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
    const fullMovie = MovieMapper.fromMovieDBToEntity(movie);
    return fullMovie;
  } catch (error) {
    console.log(error);
    throw new Error(`Cannot get movie by id: ${movieId}`);
  }
};
