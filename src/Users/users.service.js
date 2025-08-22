const users = [];

function getUsers() {
  if (users.length === 0) {
    return [];
  }

  return users;
}

function createUser(user) {
  users.push(user);

  return user;
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function deleteUserById(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return false;
  }
  users.splice(index, 1);

  return true;
}

function updateUserById(id, updatedUser) {
  const user = getUserById(id);

  if (!user) {
    return undefined;
  }
  Object.assign(user, updatedUser);

  return user;
}

module.exports = {
  getUsers,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById,
};
