const { Expense } = require("../models/expense");

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addExpense = async (req, res) => {
  try {
    const { title, amount, category } = req.body;
    const expense = await Expense.create({ title, amount, category });
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, amount, category } = req.body;
    await Expense.update({ title, amount, category }, { where: { id } });
    res.status(200).json({ message: "Expense updated successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await Expense.destroy({ where: { id } });
    res.status(200).json({ message: "Expense deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
