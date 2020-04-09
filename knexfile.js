module.exports = {
  development: {
  client: "pg",
  connection: process.env.DB_URL || {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || "crypticgen",
    user: process.env.DB_USER || "Max",
    password: process.env.DB_PASSWORD || "postgres",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/migrations",
  },
  seeds: {
    directory: "./src/seeds",
  },
},
production: {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: __dirname + '/src/migrations',
  },
  seeds: {
    directory: __dirname + '/db/seeds',
  },
},
};
