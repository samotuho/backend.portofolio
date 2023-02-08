import { Sequelize } from "sequelize";
import db from "../dbConfig/Database.js";

const { DataTypes } = Sequelize;

const TableAbout = db.define(
  "about",
  {
    nama_lengkap: DataTypes.STRING,
    tanggal_lahir: DataTypes.STRING,
    alamat: DataTypes.STRING,
    email: DataTypes.STRING,
    No_hp_wa: DataTypes.STRING,
    sekolah_dasar: DataTypes.STRING,
    sekolah_menengah_pertama: DataTypes.STRING,
    sekolah_menengah_kejuruan: DataTypes.STRING,
    strata_satu: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
export default TableAbout;

(async () => {
  await db.sync();
})();
