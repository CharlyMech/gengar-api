import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConnectionException } from './common/errors';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }

  @Get('/ping')
  async ping(): Promise<Record<string, string>> {
    try {
      const response = await this.appService.ping();
      const responseKeys = Object.keys(response);

      if (responseKeys.length === 0) {
        throw new ConnectionException(
          'No data available: unable to connect to the data source.',
        );
      }
    } catch (error) {
      throw new ConnectionException(
        `Something went wrong while connecting to data source. Error message: ${error.message}`,
      );
    }

    return { ping: 'pong' };
  }
}
