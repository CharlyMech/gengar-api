import { Injectable, ServiceUnavailableException } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return await 'Welcome to GengarAPI!\nIf you are here it means that you like pokemon and programming, I also do!\nThis API is meant to act as a format layer for FlutterDex app with PokeAPI as a source of data (please check it out: https://pokeapi.co/)';
  }

  async ping(): Promise<Record<string, string>> {
    try {
      const response = await fetch(process.env.BASE_URL);

      if (!response.ok) {
        throw new ServiceUnavailableException();
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
