import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { STUDENT_REPOSITORY } from 'src/modules/students/constants';
import { StudentRepository } from 'src/modules/students/data';
import { AuthenticateStudent } from 'src/modules/students/domain';
import { StudentOutputDTO } from 'src/modules/students/presentation';

@Injectable()
export class AuthService {
  constructor(
    @Inject(STUDENT_REPOSITORY)
    private studentsRepository: StudentRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    document: string,
    password: string,
  ): Promise<StudentOutputDTO | null> {
    const student = await this.studentsRepository.findByDocument(document);

    if (!student) {
      throw new BadRequestException('Email/Password incorrect');
    }

    const passwordMatch = await compare(password, student.password);

    if (!passwordMatch) {
      throw new BadRequestException('Email/Password incorrect');
    }
    return student;
  }

  async login(student: AuthenticateStudent) {
    const payload = { document: student.document, sub: student.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
