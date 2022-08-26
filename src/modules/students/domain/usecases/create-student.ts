import { CreateStudentInput } from '../inputs';
import { Student } from '../models';

export interface CreateStudent {
  execute(data: CreateStudentInput): Promise<Student>;
}
