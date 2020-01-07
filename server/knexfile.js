// Update with your config settings.
require("dotenv").config();

module.exports = {
  // development: {
  //   client: "mysql",
  //   connection: {
  //     host: "127.0.0.1",
  //     user: process.env.USERNAME,
  //     password: process.env.PASSWORD,
  //     database: "recipebook"
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: "./data/migrations"
  //   },
  //   seeds: {
  //     directory: "./data/seeds"
  //   }
  //   // pool: {
  //   //   afterCreate: (conn, done) => {
  //   //     // runs after a connection is made to the sqlite engine
  //   //     conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
  //   //   }
  //   // }
  // },
  development: {
    client: "postgresql",
    connection: {
      database: "recipebook",
      user: process.env.DB_USERNAME,
      password: process.env.PASSWORD
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    ssl: true
  },
  production: {
    client: "postgresql",
    connection:
      "postgres://lcnzumdanlsifl:d662e27b51a1b6e7c0d1a1a92b4ce047d665b794bd1e7172a72818c2534ce2b7@ec2-184-73-169-163.compute-1.amazonaws.com:5432/d7d5g9ngfc634a",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
