import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class EmployeesService {
  async create(data: { name: string; email: string; position: string }) {
    return prisma.employee.create({ data });
  }

  async findAll() {
    return prisma.employee.findMany();
  }

  async findOne(id: number) {
    return prisma.employee.findUnique({ where: { id } });
  }

  async update(id: number, data: { name?: string; email?: string; position?: string }) {
    return prisma.employee.update({ where: { id }, data });
  }

  async remove(id: number) {
    return prisma.employee.delete({ where: { id } });
  }
}
