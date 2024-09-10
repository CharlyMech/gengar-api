import { Controller, Get } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import {
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}
  @Get()
  @ApiOperation({ summary: 'Get all pokemon list from source of data' })
  @ApiNotFoundResponse({ description: 'All pokemon list not found' })
  @ApiResponse({
    status: 200,
    description: 'Get all pokemon list objects from PokeAPI endpoints',
  })
  async getAllPokemon(): Promise<any> {
    const response = await this.pokemonService.getAllPokemon();
    return response;
  }
}
