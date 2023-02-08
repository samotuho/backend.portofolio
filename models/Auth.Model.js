import { Sequelize } from "sequelize";
import db from "../dbConfig/Database.js";

const { DataTypes } = Sequelize;

const TableDb = db.define(
  "regis_login",
  {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default TableDb;

(async () => {
  await db.sync();
})();
