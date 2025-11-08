import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class EmployeeDto {
  @IsNumber()
  id?: number; 

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  position: string;
}