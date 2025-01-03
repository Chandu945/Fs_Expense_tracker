const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/database")

const Expense = sequelize.define("Expense", {
  title: { type: DataTypes.STRING, allowNull: false },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
});

module.exports = { Expense, sequelize };
