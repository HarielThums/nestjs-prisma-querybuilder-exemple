import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { QuerybuilderService } from './qb/qb.service';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get()
  get() {
    return this.service.get();
  }
}
