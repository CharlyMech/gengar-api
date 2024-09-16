import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PokemonBrief } from './pokemon.types';

@Injectable()
export class PokemonService {
  private readonly baseURL: string;
  constructor(private readonly configService: ConfigService) {
    this.baseURL = `${this.configService.get<string>('BASE_URL')}pokemon`;
  }
  async getPokemonBrief(pokemonId: number): Promise<PokemonBrief> {
    const response = await fetch(`${this.baseURL}/${pokemonId}`);
    return response.json();
  }
}
