import { 
  IsString, 
  IsNotEmpty, 
  IsOptional, 
  IsBoolean ,
  I
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
