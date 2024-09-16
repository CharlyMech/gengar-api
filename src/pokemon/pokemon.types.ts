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
  color: PokemonColor;

  constructor(
    id: number,
    name: string,
    img: string,
    types: string[],
    color: PokemonColor,
  ) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.types = types;
    this.color = color;
  }
}

export class PokemonColor {
  primary: string;
  light: string;
  dark: string;
  text: string;
  constructor(primary: string, light: string, dark: string, text: string) {
    this.primary = primary;
    this.light = light;
    this.dark = dark;
    this.text = text;
  }
}
