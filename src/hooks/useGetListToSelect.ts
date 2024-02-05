import { City } from "../types/City";
import { Region } from "../types/Region";
import { Pokemon } from "../types/Pokemon";

interface UseGetListToSelectProps {
  regions?: Region[];
  cities?: City[];
  pokemons?: Pokemon[];
}

export function useGetListToSelect({ regions, cities, pokemons }: UseGetListToSelectProps) {

  const regionsList = regions ? regions.map(region => region.name) : [];

  const citiesList = cities ? Array.from(cities
    .reduce((set, city) => set.add(city.name), new Set<string>()))
    : [];

  const pokemonsList = pokemons ? Array.from(pokemons
    .reduce((set, e) => set.add(e.name), new Set<string>()))
    : [];

  return {
    regionsList,
    citiesList,
    pokemonsList
  }
}