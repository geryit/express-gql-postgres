import pg from "pg";
import dotenv from 'dotenv'
dotenv.config({ path: ['.env.local', '.env'] });

const db = new pg.Pool({
  //   host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default db;
