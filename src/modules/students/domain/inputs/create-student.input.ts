export interface CreateStudentInput {
  name: string;
  password: string;
  document: string;
}

export interface AuthenticateStudent {
  document: string;
  password: string;
  id?: string;
}
