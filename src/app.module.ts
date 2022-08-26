import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { AuthModule } from './modules/auth/auth.module';
import { StudentsModule } from './modules/students/students.module';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  imports: [StudentsModule, TransactionsModule, CommonModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
