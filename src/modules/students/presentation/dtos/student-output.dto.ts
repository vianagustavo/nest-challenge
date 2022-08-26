import { ApiProperty } from '@nestjs/swagger';

import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { Student } from '../../domain';

@Exclude()
export class StudentOutputDTO implements Student {
  @ApiProperty()
  @IsOptional()
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
  @IsOptional()
  @Expose()
  @IsDate()
  public createdAt: Date;

  @ApiProperty()
  @IsOptional()
  @Expose()
  @IsDate()
  public updatedAt: Date;

  constructor(partial: Partial<StudentOutputDTO>) {
    Object.assign(this, partial);
  }
}
