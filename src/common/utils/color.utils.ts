import { PokemonColor } from 'src/pokemon/pokemon.types';

const pokemonColors = {
  black: {
    primary: '#4f4f4f',
    light: '#7d7d7d',
    dark: '#2d2d2d',
    text: '#f0f0f0',
  },
  blue: {
    primary: '#a3cde5',
    light: '#d0e7f8',
    dark: '#6b9fbf',
    text: '#f0f0f0',
  },
  brown: {
    primary: '#c4a484',
    light: '#e4d3c4',
    dark: '#927358',
    text: '#f0f0f0',
  },
  gray: {
    primary: '#c1c1c1',
    light: '#e2e2e2',
    dark: '#919191',
    text: '#212121',
  },
  green: {
    primary: '#b2d8b2',
    light: '#d8f3d8',
    dark: '#87b087',
    text: '#212121',
  },
  pink: {
    primary: '#f4c2c2',
    light: '#f9e1e1',
    dark: '#d29292',
    text: '#212121',
  },
  purple: {
    primary: '#d1c4e9',
    light: '#ebe3f3',
    dark: '#a394c2',
    text: '#f0f0f0',
  },
  red: {
    primary: '#f4a8a8',
    light: '#f9d5d5',
    dark: '#d07878',
    text: '#212121',
  },
  white: {
    primary: '#f9f9f9',
    light: '#f0f0f0',
    dark: '#e2e2e2',
    text: '#212121',
  },
  yellow: {
    primary: '#fdfd96',
    light: '#fffcc6',
    dark: '#e0d86a',
    text: '#212121',
  },
};

export function getPokemonColor(
  colorName: keyof typeof pokemonColors,
): PokemonColor {
  const pokemonColorObject = pokemonColors[colorName];
  const pokemonColor: PokemonColor = new PokemonColor(
    pokemonColorObject['primary'],
    pokemonColorObject['light'],
    pokemonColorObject['dark'],
    pokemonColorObject['text'],
  );
  return pokemonColor;
}
