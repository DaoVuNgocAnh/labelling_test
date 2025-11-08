import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeesController } from './employee.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EmployeesController],
  providers: [EmployeeService],
})
export class EmployeesModule {}
