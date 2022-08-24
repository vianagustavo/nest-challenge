import { ApiProperty } from '@nestjs/swagger';
import { Account } from '@prisma/client';

import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';
import { Student } from '../../domain';

@Exclude()
export class StudentDTO implements Student {
  @ApiProperty()
  @Expose()
  @IsString()
  public id: string;

  @ApiProperty()
  @Expose()
  @IsString()
  public name: string;

  @ApiProperty()
  @Expose()
  @IsString()
  public document: string;

  @ApiProperty()
  @IsString()
  public password: string;

  @ApiProperty()
  @Expose()
  @IsDate()
  public createdAt: Date;

  @ApiProperty()
  @Expose()
  @IsDate()
  public updatedAt: Date;

  constructor(partial: Partial<StudentDTO>) {
    Object.assign(this, partial);
  }
}
