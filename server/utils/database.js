const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Expense_tracker", "root", "Chandu@940", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize