import { Sequelize } from "sequelize";

const db = new Sequelize('db', 'user', 'password', {
  dialect: 'mysql',
});
export default db;

