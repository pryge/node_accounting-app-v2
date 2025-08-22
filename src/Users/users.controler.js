const {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
  updateUserById,
} = require('./users.service');

const getAll = async (req, res) => {
  const users = await getUsers();

  return res.json(users);
};

const create = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const user = { id: Date.now(), name };
  const newUser = await createUser(user);

  return res.status(201).json(newUser);
};

const getById = async (req, res) => {
  const id = Number(req.params.id);
  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  return res.json(user);
};

const deleteById = async (req, res) => {
  const id = Number(req.params.id);
  const success = await deleteUserById(id);

  if (!success) {
    return res.status(404).json({ error: 'User not found' });
  }

  return res.status(204).send();
};

const updateById = async (req, res) => {
  const id = Number(req.params.id);
  const updatedUser = req.body;

  if (!updatedUser.name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const user = await updateUserById(id, updatedUser);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  return res.json(user);
};

module.exports = {
  getAll,
  create,
  getById,
  deleteById,
  updateById,
};
