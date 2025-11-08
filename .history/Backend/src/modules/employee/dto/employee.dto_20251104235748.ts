import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class EmployeeDto {
  

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