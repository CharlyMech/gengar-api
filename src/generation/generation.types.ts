import { ApiProperty } from '@nestjs/swagger';
import { PokemonBrief } from 'src/pokemon/pokemon.types';

export class Generation {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  mainRegion: string; // Temporary
  @ApiProperty({
    isArray: true,
    type: PokemonBrief,
  })
  pokemonList: PokemonBrief[];

  constructor(
    id: number,
    name: string,
    mainRegion: string,
    pokemonList: PokemonBrief[],
  ) {
    this.id = id;
    this.name = name;
    this.mainRegion = mainRegion;
    this.pokemonList = pokemonList;
  }
}
