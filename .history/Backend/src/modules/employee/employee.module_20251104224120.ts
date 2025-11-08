import { Module } from '@nestjs/common';
import { EmployeesService } from './employee.service';
import { EmployeesController } from './employee.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
