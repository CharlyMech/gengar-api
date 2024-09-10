import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to GengarAPI!\nIf you are here it means that you like pokemon and programming, I also do!\nThis API is meant to act as a format layer for FlutterDex app with PokeAPI as a source of data (please check it out: https://pokeapi.co/)';
  }

  ping(): Record<string, string> {
    return { ping: 'pong' };
  }
}
