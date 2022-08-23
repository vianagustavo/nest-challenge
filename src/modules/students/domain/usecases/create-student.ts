import { Student } from '../models';

export interface CreateStudent {
  execute(data: Student): Promise<Student>;
}
