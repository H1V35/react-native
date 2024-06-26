import { pokeApi } from '~/config/api/pokeApi';
import { type Pokemon } from '~/domain/entities/pokemon';
import type {
  PokeAPIPokemon,
  PokeAPIPaginatedResponse,
} from '~/infraestructure/interfaces/pokeapi.interfaces';
import { pokeApiPokemonToEntity } from '~/infraestructure/mappers/pokemon.mapper';

export const getPokemons = async (page: number, limit: number = 20): Promise<Pokemon[]> => {
  try {
    const url = `/pokemon?offset=${page * 20}&limit=${limit}`;
    const { data } = await pokeApi.get<PokeAPIPaginatedResponse>(url);

    const pokemonPromises = data.results.map((info) => {
      return pokeApi.get<PokeAPIPokemon>(info.url);
    });

    const pokeApiPokemons = await Promise.all(pokemonPromises);
    const pokemons = pokeApiPokemons.map((item) => pokeApiPokemonToEntity(item.data));

    return pokemons;
  } catch (error) {
    console.log(error);
    throw new Error('Error getting pokemons');
  }
};
