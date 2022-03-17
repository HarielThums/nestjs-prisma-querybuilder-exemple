import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { QuerybuilderService } from './qb/qb.service';

@Injectable()
export class AppService {
  constructor(private readonly qb: QuerybuilderService, private readonly prisma: PrismaService) {}

  async get() {
    const query = await this.qb.query();

    const data = await this.prisma.user.findMany(query);

    return data;
  }
}
