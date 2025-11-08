import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class EmployeeDto {
  @IsUUID()
  id?: n; 

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