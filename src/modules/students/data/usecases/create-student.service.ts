import { BadRequestException, Inject } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { STUDENT_REPOSITORY } from '../../constants/repositories';
import { CreateStudent, Student } from '../../domain';
import { StudentRepository } from '../repositories';

export class CreateStudentService implements CreateStudent {
  constructor(
    @Inject(STUDENT_REPOSITORY)
    private readonly studentRepository: StudentRepository,
  ) {}

  public async execute(data: Student): Promise<Student> {
    const studentExists = await this.studentRepository.findByDocument(
      data.document,
    );
    if (studentExists) {
      throw new BadRequestException('User has already been registered.');
    }
    const passwordHash = await hash(data.password, 10);
    const student = await this.studentRepository.create({
      ...data,
      password: passwordHash,
    });
    return student;
  }
}
