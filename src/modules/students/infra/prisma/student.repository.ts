import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/common/infra';
import { StudentRepository } from '../../data';
import { CreateStudentInput, Student } from '../../domain';

@Injectable()
export class PrismaStudentRepository implements StudentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(input: CreateStudentInput): Promise<Student> {
    const accountId = randomUUID();
    const student = await this.prismaService.student.create({
      data: {
        ...input,
        accounts: {
          create: {
            id: accountId,
            balance: {
              create: {
                id: randomUUID(),
                available: 0,
              },
            },
          },
        },
      },
    });
    return { ...student };
  }

  public async findByDocument(document: string): Promise<Student> {
    const student = await this.prismaService.student.findUnique({
      where: {
        document,
      },
    });
    if (!student) {
      return null;
    }
    return { ...student };
  }
}
