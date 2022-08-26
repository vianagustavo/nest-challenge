import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { STUDENT_REPOSITORY } from '../students/constants';
import { PrismaStudentRepository } from '../students/infra/prisma';
import { StudentsModule } from '../students/students.module';
import { AuthService } from './data/usecases/auth.service';
import { JwtStrategy } from './infra/passport/jwt-strategy';
import { LocalStrategy } from './infra/passport/local-strategy';
import { AuthenticateStudentController } from './presentation/controllers/auth-student.controller';

@Global()
@Module({
  imports: [
    StudentsModule,
    PassportModule,
    JwtModule.register({
      secret: '76c885c4e4f1c7e6a54239a8de7aaa89',
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: STUDENT_REPOSITORY,
      useClass: PrismaStudentRepository,
    },
  ],
  controllers: [AuthenticateStudentController],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
