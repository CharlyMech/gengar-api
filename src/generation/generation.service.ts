import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Generation } from './generation.types';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { ParameterNotFound } from 'src/common/errors';

@Injectable()
export class GenerationService {
  private readonly baseUrl: string;
  constructor(
    private readonly configService: ConfigService,
    private readonly pokemonService: PokemonService,
  ) {
    this.baseUrl = `${this.configService.get<string>('BASE_URL')}generation`;
  }

  async getGeneration(id: number): Promise<Generation> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (!response.ok) throw new ParameterNotFound('Generations', `${id}`);

    const data = await response.json();
    const pokemonIds = data['pokemon_species'].map((specie) =>
      specie['url'].split('/').at(-2),
    );

    const pokemonsBrief = await Promise.all(
      pokemonIds.map((pokemonId) =>
        this.pokemonService.getPokemonBrief(pokemonId),
      ),
    );

    const generation: Generation = new Generation(
      data['id'],
      data['name'],
      data['main_region']['name'],
      pokemonsBrief,
    );

    return generation;
  }
}
