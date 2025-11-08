import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { name: string; email: string; position: string }) {
    return this.prisma.employee.create({ data });
  }

  async findAll() {
    return this.prisma.employee.findMany();
  }

  async findOne(id: number) {
    return this.prisma.employee.findUnique({ where: { id } });
  }

  async update(id: number, data: { name?: string; email?: string; position?: string }) {
    return this.prisma.employee.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.employee.delete({ where: { id } });
  }
}
