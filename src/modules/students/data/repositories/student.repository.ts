import { Student } from '../../domain';
import { CreateStudentInput } from '../../domain/inputs/create-student.input';

export interface StudentRepository {
  create(input: CreateStudentInput): Promise<Student>;

  findByDocument(document: string): Promise<Student | null>;
}
