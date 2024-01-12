import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @MinLength(8)
  @IsOptional()
  password: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsDateString()
  @IsOptional()
  birthday: string;
}
