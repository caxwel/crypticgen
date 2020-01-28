const { setupServer } = require("./server");

module.exports = {
  db: {
    client: "pg",
    connection: process.env.DB_URL || {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "crypticgen",
      user: process.env.DB_USER || "Max",
      password: process.env.DB_PASSWORD || "postgres",
    },
  },
};

const server = setupServer();
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server listening on Port", PORT);
});
