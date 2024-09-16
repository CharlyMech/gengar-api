import { ApiProperty } from '@nestjs/swagger';

export class PokemonBrief {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  img: string; // Temporary
  @ApiProperty({
    isArray: true,
  })
  types: string[];

  constructor(id: number, name: string, img: string, types: string[]) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.types = types;
  }
}
