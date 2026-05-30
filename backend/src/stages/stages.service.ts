import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class StagesService {
  constructor(@Inject('DATABASE_POOL') private readonly db: Pool) {}

  async getAll() {
    const queryText = `
      SELECT s.*, 
             COALESCE(json_agg(c.*) FILTER (WHERE c.id IS NOT NULL), '[]') as competitions
      FROM stages s
      LEFT JOIN competitions c ON s.id = c.stage_id
      GROUP BY s.id;
    `;

    const result = await this.db.query(queryText);
    return result.rows;
  }

  async getOne(id: number) {
    const queryText = `
      SELECT s.*, 
             COALESCE(json_agg(c.*) FILTER (WHERE c.id IS NOT NULL), '[]') as competitions
      FROM stages s
      LEFT JOIN competitions c ON s.id = c.stage_id
      WHERE s.id = $1
      GROUP BY s.id;
    `;

    const result = await this.db.query(queryText, [id]);

    if (result.rows.length === 0) {
      throw new NotFoundException(`Race with ID ${id} not found`);
    }

    return result.rows[0];
  }
}
