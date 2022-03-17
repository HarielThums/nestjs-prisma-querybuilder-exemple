import { BadRequestException, Injectable } from '@nestjs/common';
import { Querybuilder } from '@nestjs/prisma-query-builder';

@Injectable()
export class QuerybuilderService {
  constructor(private readonly querybuilder: Querybuilder) {}

  async query() {
    return this.querybuilder.query().catch((err) => {
      throw new BadRequestException(err.response.message);
    });
  }
}
