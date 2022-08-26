import { Global, Module } from '@nestjs/common';
import { CREATE_STUDENT, STUDENT_REPOSITORY } from './constants';
import { CreateStudentService } from './data/usecases/create-student.service';
import { PrismaStudentRepository } from './infra/prisma';
import { CreateStudentController } from './presentation';

@Global()
@Module({
  providers: [
    {
      provide: CREATE_STUDENT,
      useClass: CreateStudentService,
    },
    {
      provide: STUDENT_REPOSITORY,
      useClass: PrismaStudentRepository,
    },
  ],
  controllers: [CreateStudentController],
  exports: [],
})
export class StudentsModule {}
