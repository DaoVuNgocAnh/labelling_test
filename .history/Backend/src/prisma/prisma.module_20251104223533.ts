import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Cho phép import PrismaService ở bất kỳ module nào mà không cần import lại
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
