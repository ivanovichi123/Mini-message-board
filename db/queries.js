import pool from "./pool.js";

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getOneMessage(messageNumber) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    messageNumber,
  ]);
  return rows;
}

async function addOneMessage(text, user) {
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES($1, $2, now());",
    [text, user],
  );
}

export { getAllMessages, getOneMessage, addOneMessage };
