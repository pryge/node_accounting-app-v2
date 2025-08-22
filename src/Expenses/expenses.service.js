/**
 * @typedef {Object} Expense
 * @property {number} [id]
 * @property {number} userId
 * @property {Date} spentAt
 * @property {string} title
 * @property {number} amount
 * @property {string} category
 * @property {string} note
 */

const expenses = [];

/**
 * @returns {Expense[]}
 */
function getExpenses() {
  return [...expenses];
}

/**
 * @param {Expense} expense
 * @returns {Expense}
 */
function createExpense(expense) {
  const newExpense = {
    ...expense,
    id: Date.now(),
  };

  expenses.push(newExpense);

  return newExpense;
}

/**
 * @param {number} id
 * @returns {Expense | undefined}
 */
function getExpenseById(id) {
  return expenses.find((expense) => expense.id === id);
}

/**
 * @param {number} id
 * @returns {boolean}
 */
function deleteExpenseById(id) {
  const index = expenses.findIndex((expense) => expense.id === id);

  if (index === -1) {
    return false;
  }
  expenses.splice(index, 1);

  return true;
}

/**
 * @param {number} id
 * @param {Partial<Expense>} updated
 * @returns {Expense | undefined}
 */
function updateExpenseById(id, updated) {
  const expense = getExpenseById(id);

  if (!expense) {
    return undefined;
  }

  Object.assign(expense, updated);

  return expense;
}

module.exports = {
  getExpenses,
  createExpense,
  getExpenseById,
  deleteExpenseById,
  updateExpenseById,
};
