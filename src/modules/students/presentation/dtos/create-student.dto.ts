import { ApiProperty } from '@nestjs/swagger';

import { Expose } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { Student } from '../../domain';

@Expose()
export class StudentDTO implements Student {
  @ApiProperty()
  @IsOptional()
  @IsString()
  public id: string;

  @ApiProperty()
  @IsString()
  public name: string;

  @ApiProperty()
  @IsString()
  public document: string;

  @ApiProperty()
  @IsString()
  public password: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  public createdAt: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  public updatedAt: Date;

  constructor(partial: Partial<StudentDTO>) {
    Object.assign(this, partial);
  }
}
