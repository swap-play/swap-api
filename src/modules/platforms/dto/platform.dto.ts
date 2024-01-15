import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PlatformDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsString()
  @IsOptional()
  image: string;
}
