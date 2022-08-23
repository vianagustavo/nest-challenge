import { Module } from '@nestjs/common';
import { CREATE_STUDENT, STUDENT_REPOSITORY } from './constants';
import { CreateStudentService } from './data/usecases/create-student.service';
import { PrismaStudentRepository } from './infra/prisma';
import { CreateStudentController } from './presentation';

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
})
export class StudentsModule {}
