import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//écouter une requête entrante et fournir une réponse
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
