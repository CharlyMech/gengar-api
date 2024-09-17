import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Generation } from './generation.types';

@Injectable()
export class GenerationService {
  private readonly baseUrl: string;
  constructor(private readonly configService: ConfigService) {
    this.baseUrl = `${this.configService.get<string>('BASE_URL')}generation`;
  }

  async getGeneration(id: number): Promise<Generation> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    const data = await response.json();
    const generation: Generation = new Generation(
      data['id'],
      data['name'],
      data['main_region']['name'],
      data['pokemon_species'],
    );

    return generation;
  }
}
