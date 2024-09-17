import { Controller, Get, Query } from '@nestjs/common';
import { GenerationService } from './generation.service';
import {
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Generation } from './generation.types';
import { ParametersNeeded } from 'src/common/errors';

@ApiTags('generation')
@Controller('generation/')
export class GenerationController {
  constructor(private readonly generationService: GenerationService) {}

  @Get('')
  @ApiOperation({ summary: 'Get generation information by id' })
  @ApiNotFoundResponse({ description: 'Generation not found' })
  @ApiResponse({
    status: 200,
    description: 'Return Generation object from PokeAPI data endpoints',
    type: Generation,
  })
  async findAll(
    @Query('generationId') generationId: number,
  ): Promise<Generation> {
    if (!generationId) throw new ParametersNeeded();

    const response: Generation =
      await this.generationService.getGeneration(generationId);
    return response;
  }
}
