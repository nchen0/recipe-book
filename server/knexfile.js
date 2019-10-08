// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: "recipebook"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
    // pool: {
    //   afterCreate: (conn, done) => {
    //     // runs after a connection is made to the sqlite engine
    //     conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
    //   }
    // }
  },
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
