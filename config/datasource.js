import 'dotenv/config';
import Sequelize from 'sequelize';

const config = {
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  params: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DIALECT,
    logging: false
  }
}

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config.params
);

module.exports = sequelize;
