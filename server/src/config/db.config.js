module.exports = {
  HOST: process.env.HOST || "localhost",
  USER: process.env.USER || "root",
  PASSWORD: process.env.PASSWORD || "root",
  DB: process.env.DB || "earnest",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
