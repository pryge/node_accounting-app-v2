const {
  getExpenses,
  createExpense,
  getExpenseById,
  deleteExpenseById,
  updateExpenseById,
} = require('./expenses.service');

/**
 * @type {import('express').RequestHandler}
 */
const getAll = async (req, res) => {
  res.json(getExpenses());
};

/**
 * @type {import('express').RequestHandler}
 */
const create = (req, res) => {
  const { userId, spentAt, title, amount, category, note } = req.body;

  if (!userId || !spentAt || !title || !amount || !category || !note) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newExpense = createExpense({
    userId,
    spentAt: new Date(spentAt),
    title,
    amount,
    category,
    note,
  });

  res.status(201).json(newExpense);
};

/**
 * @type {import('express').RequestHandler}
 */
const getById = (req, res) => {
  const id = Number(req.params.id);
  const expense = getExpenseById(id);

  if (!expense) {
    return res.status(404).json({ error: 'Expense not found' });
  }

  res.json(expense);
};

/**
 * @type {import('express').RequestHandler}
 */
const deleteById = (req, res) => {
  const id = Number(req.params.id);
  const success = deleteExpenseById(id);

  if (!success) {
    return res.status(404).json({ error: 'Expense not found' });
  }

  res.status(204).send();
};

/**
 * @type {import('express').RequestHandler}
 */
const updateById = (req, res) => {
  const id = Number(req.params.id);
  const updatedExpense = updateExpenseById(id, req.body);

  if (!updatedExpense) {
    return res.status(404).json({ error: 'Expense not found' });
  }

  res.json(updatedExpense);
};

module.exports = {
  getAll,
  create,
  getById,
  deleteById,
  updateById,
};
