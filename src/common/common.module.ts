import { Global, Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { PrismaService } from './infra';
import { makeValidationPipe } from './main/factories/pipes/validation-pipe.factory';

@Global()
@Module({
  providers: [
    PrismaService,
    {
      provide: APP_PIPE,
      useFactory: makeValidationPipe,
    },
  ],
  exports: [PrismaService],
})
export class CommonModule {}
