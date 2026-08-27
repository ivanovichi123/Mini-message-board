import { Pool } from "pg";

const pool = new Pool({
  host: process.env.ENV_HOST,
  user: process.env.ENV_USER,
  database: process.env.ENV_DATABASE,
  password: process.env.ENV_PASSWORD,
  port: process.env.ENV_PORT,
});

export default pool;
