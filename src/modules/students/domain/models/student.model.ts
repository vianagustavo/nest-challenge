import { Account } from '@prisma/client';

export interface Student {
  id: string;
  name: string;
  password: string;
  document: string;
  createdAt: Date;
  updatedAt: Date;
  accounts?: Account[];
}
