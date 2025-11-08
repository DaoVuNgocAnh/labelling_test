import { 
  IsString, 
  IsNotEmpty, 
  IsOptional, 
  IsBoolean ,
  IsUUID
} from 'class-validator';

export class EmployeeDto {
  @IsNu()
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
