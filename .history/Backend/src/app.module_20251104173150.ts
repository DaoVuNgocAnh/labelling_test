import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './modules/employee/employees.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [EmployeesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaModule],
})
export class AppModule {}
