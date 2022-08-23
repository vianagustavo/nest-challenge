import { Body, Controller, Inject, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CREATE_STUDENT } from 'src/modules/students/constants/usecases';
import { CreateStudent } from 'src/modules/students/domain';
import { StudentDTO } from '../../dtos/student.dto';

@Controller('student')
export class CreateStudentController {
  constructor(
    @Inject(CREATE_STUDENT)
    private readonly createStudent: CreateStudent,
  ) {}

  @Post()
  public async create(@Body() input: StudentDTO): Promise<StudentDTO> {
    const student = await this.createStudent.execute(input);

    return plainToInstance(StudentDTO, student);
  }
}
