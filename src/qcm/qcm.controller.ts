import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { QcmService } from './qcm.service';

@Controller('qcm')
export class QcmController {
  constructor(private readonly qcmService: QcmService) {}

  @Get()
  findAll() {
    console.log('controller', this.qcmService.findAll());
    return this.qcmService.findAll();
  }
}
