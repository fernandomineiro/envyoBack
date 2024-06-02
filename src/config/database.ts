import "../bootstrap";

module.exports = {
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_bin"
  },
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
  dialect: "postgres",
  timezone: "-03:00",
  host: 'pg-1453c7e9-inovavc-02c9.f.aivencloud.com',
  port: '11639',
  database: 'defaultdb',
  username: 'avnadmin',
  password: 'AVNS_0KZV8MYyOJhmowqWd2f',
  logging: process.env.DB_DEBUG === "true"
};
