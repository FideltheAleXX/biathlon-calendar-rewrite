import { Controller, Get } from '@nestjs/common';
import { CompetitionsService } from './competitions.service';

@Controller('stages')
export class CompetitionsController {
  constructor(private readonly competitionsService: CompetitionsService) {}

  // @Get()
  // getAllCompetitions() {
  //   return this.competitionsService.getAll();
  // }
}
