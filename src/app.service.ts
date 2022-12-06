import { Injectable } from '@nestjs/common';
//fournir des fonctionnalités au controller
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
