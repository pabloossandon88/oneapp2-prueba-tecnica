import { initDB } from '../db/db';

export interface ResponseRecord {
  email: string;
  motivation?: string | null;
  language: string;
  created_at?: string;
}

export class ResponseModel {
  static async findByEmail(email: string): Promise<ResponseRecord | null> {
    const db = await initDB();
    const result = await db.get(
      `SELECT email, language, motivation, created_at FROM responses WHERE email = ?`,
      [email]
    );
    return result || null;
  }

  static async create(data: ResponseRecord): Promise<void> {
    const db = await initDB();
    await db.run(
      `INSERT INTO responses (email, motivation, language) VALUES (?, ?, ?)`,
      [data.email, data.motivation || null, data.language]
    );
  }

  static async count(): Promise<number> {
    const db = await initDB();
    const result = await db.get(`SELECT COUNT(*) as count FROM responses`);
    return result.count;
  }

  static async recent(limit = 5): Promise<ResponseRecord[]> {
    const db = await initDB();
    return await db.all(`
      SELECT email, language, motivation, created_at 
      FROM responses 
      ORDER BY created_at DESC 
      LIMIT ?
    `, [limit]);
  }

  static async stats(): Promise<{ language: string; count: number }[]> {
    const db = await initDB();
    return await db.all(`
      SELECT language, COUNT(*) as count 
      FROM responses 
      GROUP BY language
    `);
  }
}
