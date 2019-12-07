// Update with your config settings.
require("dotenv").config();

module.exports = {
  // development: {
  //   client: "mysql",
  //   connection: {
  //     host: "127.0.0.1",
  //     user: process.env.DB_USERNAME,
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
    connection:
      "postgres://mrfcxirslzhsil:b51b299a83d807a07baa4a8ef943f047f86e6043a3a5f252d73cbfd52dc4ca6e@ec2-50-19-95-77.compute-1.amazonaws.com:5432/d7n77cemjbvt10",
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
    // pool: {
    //   afterCreate: (conn, done) => {
    //     // runs after a connection is made to the sqlite engine
    //     conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
    //   }
  },
  production: {
    client: "postgresql",
    connection:
      "postgres://mrfcxirslzhsil:b51b299a83d807a07baa4a8ef943f047f86e6043a3a5f252d73cbfd52dc4ca6e@ec2-50-19-95-77.compute-1.amazonaws.com:5432/d7n77cemjbvt10",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    }
  }
};