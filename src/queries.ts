import db from "../db";

export const create = async ({title, year}: {title: string; year: string }) => {
  const query = `
    INSERT INTO work (title, year) VALUES ($1, $2) RETURNING *;
  `;
  const result = await db.query(query, [title, year]);
  return result.rows[0];
}

export const all = async () => {
  const query = `
    SELECT * FROM work;
  `;
  const result = await db.query(query);
  return result.rows;
}

export const one = async (id: string) => {
  const query = `
    SELECT * FROM work where id = $1;
  `;
  const result = await db.query(query, [id]);
  return result.rows[0];
}

