import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CompetitionsService {
  constructor(@Inject('DATABASE_POOL') private readonly db: Pool) {}
}
