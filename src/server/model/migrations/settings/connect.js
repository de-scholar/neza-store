import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const connect = new Pool({
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
});
export default connect;
