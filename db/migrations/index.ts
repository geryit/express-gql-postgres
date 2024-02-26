import db from "../index";
import createTable from "./create_table";

const runMigrations = async () => {
  const client = await db.connect();
  try {
    await client.query("BEGIN");
    await client.query(createTable);
    await client.query("COMMIT");
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
};

export default runMigrations;
