import { HttpAdapter } from '~/config/adapters/http/http.adapter';
import { type Cast } from '~/core/entities/cast.entity';
import { MovieDBCastResponse } from '~/infraestructure/interfaces/movie-db.responses';
import { CastMapper } from '~/infraestructure/mappers/cast.mapper';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number
): Promise<Cast[]> => {
  try {
    const { cast } = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);
    const actors = cast.map(CastMapper.fromMovieDBCastToEntity);
    return actors;
  } catch (error) {
    console.log(error);
    throw new Error(`Cannot get movie cast ${movieId}`);
  }
};
