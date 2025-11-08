import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class EmployeeDto {
  @IsUUID()
  id?: ; 

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