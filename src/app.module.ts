import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { QcmModule } from './qcm/qcm.module';

@Module({
  imports: [TodosModule, QcmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
