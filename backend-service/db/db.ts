import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Configura la conexión a la base de datos SQLite
export const initDB = async () => {
  console.log('initDB'); 
  const db = await open({
    filename: './database/database.sqlite',
    driver: sqlite3.Database,
  });

  // Crear tabla responses si no existe
  await db.exec(`
    CREATE TABLE IF NOT EXISTS responses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      motivation TEXT,
      language TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  return db;
};
