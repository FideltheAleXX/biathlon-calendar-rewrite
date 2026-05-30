import { Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { StagesService } from './stages.service';

@Controller('stages')
export class StagesController {
  constructor(private readonly stagesService: StagesService) {}

  @Get()
  getAllStages() {
    return this.stagesService.getAll();
  }

  @Get(':id')
  getOneStage(@Param('id') id: string) {
    return this.stagesService.getOne(+id);
  }

  @Post(':id')
  createStage() {
    return this.stagesService.createStage();
  }

  @Put(':id')
  updateStage() {
    return this.stagesService.updateStage();
  }

  @Delete(':id')
  deleteStage() {
    return this.stagesService.deleteStage();
  }
}
