import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // làm module này global để các module khác không cần import vẫn dùng được
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // export service để các module khác inject
})
export class PrismaModule {}
