import { Controller, Get, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonBrief } from './pokemon.types';
import {
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ParametersNeeded } from 'src/common/errors';

@ApiTags('pokemon')
@Controller('pokemon/')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('/brief')
  @ApiOperation({ summary: 'Get pokemon brief information' })
  @ApiNotFoundResponse({ description: 'Pokemon not found' })
  @ApiResponse({
    status: 200,
    description: 'Return PokemonBrief object from PokeAPI data endpoints',
    type: PokemonBrief,
  })
  async getPokemonBrief(
    @Query('pokemonId') pokemonId: number,
  ): Promise<PokemonBrief> {
    if (!pokemonId) throw new ParametersNeeded();

    const response: PokemonBrief =
      await this.pokemonService.getPokemonBrief(pokemonId);
    return response;
  }
}
