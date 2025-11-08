import { 
  IsString, 
  IsNotEmpty, 
  IsOptional, 
  IsBoolean ,
  IsNu
} from 'class-validator';

export class EmployeeDto {
  @IsNumber()
  id?: string; 

  @IsString()
  @IsNotEmpty()
  type: string; 

  @IsString()
  @IsNotEmpty()
  code: string; 

  @IsString()
  @IsNotEmpty()
  name: string; 

  @IsString()
  @IsOptional()
  note?: string; 

  @IsBoolean()
  @IsOptional()
  is_deleted?: boolean; 
}
