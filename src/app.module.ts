import { Module } from '@nestjs/common';
import { Querybuilder } from '@nestjs/prisma-query-builder';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { QuerybuilderService } from './qb/qb.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Querybuilder, QuerybuilderService, PrismaService],
})
export class AppModule {}
