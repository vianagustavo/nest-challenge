import { Global, Module } from '@nestjs/common';
import { PrismaService } from './infra';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class CommonModule {}
