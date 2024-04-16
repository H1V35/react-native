import { pokeApi } from '~/config/api/pokeApi';
import { type Pokemon } from '~/domain/entities/pokemon';
import { type PokeAPIPokemon } from '~/infraestructure/interfaces/pokeapi.interfaces';
import { pokeApiPokemonToEntity } from '~/infraestructure/mappers/pokemon.mapper';

export const getPokemonById = async (id: number): Promise<Pokemon> => {
  try {
    const { data } = await pokeApi.get<PokeAPIPokemon>(`/pokemon/${id}`);
    const pokemon = pokeApiPokemonToEntity(data);
    return pokemon;
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting pokemon by id: ${id}`);
  }
};
