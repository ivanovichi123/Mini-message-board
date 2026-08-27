import { Client } from "pg";

const SQL = `CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(100),
    username VARCHAR(30),
    added TIMESTAMP(0)
);

INSERT INTO messages (text, username, added)
VALUES
    ('Wow what an amazing site!!', 'Anonymous', now()),
    ('This is incredible!!', 'Pedro', now()),
    ('Now it has a database!!', 'The creator', now());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.ENV_USER}:${process.env.ENV_PASSWORD}@${process.env.ENV_HOST}:${process.env.ENV_PORT}/${process.env.ENV_DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
