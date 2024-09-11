import { HttpException, HttpStatus } from '@nestjs/common';

export class ConnectionException extends HttpException {
  constructor(msg: string) {
    super(
      {
        statusCode: HttpStatus.SERVICE_UNAVAILABLE,
        error: 'Service unavailable',
        message: msg,
      },
      HttpStatus.SERVICE_UNAVAILABLE,
    );
  }
}
