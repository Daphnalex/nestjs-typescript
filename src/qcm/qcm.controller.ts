import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Qcm } from './qcm.interface';
import { QcmService } from './qcm.service';

@Controller('qcm')
export class QcmController {
  constructor(private readonly qcmService: QcmService) {}

  @Get()
  findAll() {
    console.log('controller', this.qcmService.findAll());
    return this.qcmService.findAll();
  }

  @Post()
  createQcm(@Body() newQcm: Qcm) {
    return this.qcmService.createQcm(newQcm);
  }
}
