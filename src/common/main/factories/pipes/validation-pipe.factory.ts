import {
  BadRequestException,
  HttpException,
  HttpStatus,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { StudentValidationError } from 'src/common/domain/errors/challenge-validation.error';

export function makeValidationPipe(): ValidationPipe {
  return new ValidationPipe({
    transform: true,
    whitelist: true,
    exceptionFactory: (errors): HttpException => {
      function transformError(error: ValidationError): StudentValidationError {
        return {
          value: error.value,
          field: error.property,
          validation: error.constraints,
          children: error.children?.map(transformError),
        };
      }

      return new BadRequestException({
        message: 'Por favor, verifique os parâmetros da solicitação',
        errors: errors.map(transformError),
        statusCode: HttpStatus.BAD_REQUEST,
      });
    },
  });
}
