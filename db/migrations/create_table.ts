const createTable = `
    CREATE TABLE IF NOT EXISTS work (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        year VARCHAR(4) NOT NULL DEFAULT '2021'
    );
`;

export default createTable;
