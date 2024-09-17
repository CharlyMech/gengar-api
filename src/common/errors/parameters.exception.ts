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

export class ParameterNotFound extends HttpException {
  constructor(from: string, value: string) {
    super(
      {
        statusCode: HttpStatus.NOT_FOUND,
        error: 'Not found',
        message: `The parameter ${value} is not found on ${from} context`,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
