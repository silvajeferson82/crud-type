import { DataTypes } from "sequelize";
import { db } from "../config/database";

export const UserModel = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
