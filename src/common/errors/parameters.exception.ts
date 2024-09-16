import { HttpException, HttpStatus } from '@nestjs/common';

export class ParametersNeeded extends HttpException {
  constructor() {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        error: 'Bad request',
        message: 'This function needs all parameters to be specified',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
