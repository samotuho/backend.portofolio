import { Sequelize } from "sequelize";
import db from "../dbConfig/Database.js";

const { DataTypes } = Sequelize;

const TableContact = db.define(
  "contact",
  {
    original_name: DataTypes.STRING,
    email_address: DataTypes.STRING,
    your_message: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
export default TableContact;

(async () => {
  await db.sync();
})();
