import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PokemonBrief } from './pokemon.types';
import { getPokemonColor } from 'src/common/utils/color.utils';

@Injectable()
export class PokemonService {
  private readonly baseUrl: string;
  private readonly speciesUrl: string;
  constructor(private readonly configService: ConfigService) {
    this.baseUrl = `${this.configService.get<string>('BASE_URL')}pokemon`;
    this.speciesUrl = `${this.baseUrl}-species`;
  }
  async getPokemonBrief(pokemonId: number): Promise<PokemonBrief> {
    const [baseResponse, speciesResponse] = await Promise.all([
      fetch(`${this.baseUrl}/${pokemonId}`),
      fetch(`${this.speciesUrl}/${pokemonId}`),
    ]);
    const baseData = await baseResponse.json();
    const speciesData = await speciesResponse.json();

    const pokemonBrief: PokemonBrief = new PokemonBrief(
      baseData['id'],
      baseData['name'],
      baseData['sprites']['other']['home']['front_default'],
      baseData['types'].map((typeEntry) => typeEntry['type']['name']),
      getPokemonColor(speciesData['color']['name']),
    );

    return pokemonBrief;
  }
}
