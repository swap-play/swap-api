import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GameDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsNotEmpty()
  platformId: string;
}
