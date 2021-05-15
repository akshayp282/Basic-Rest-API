import { v4 as uuidv4 } from "uuid";

let users = [];
export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  //console.log(user);
  const userWithId = { ...user, id: uuidv4() };

  users.push(userWithId);

  res.send(`User ${user.name} added`);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id == id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with id ${id} deleted`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, lastName, age } = req.body;

  const userToupdate = users.find((user) => user.id === id);

  if (name) userToupdate.name = name;
  if (lastName) userToupdate.lastName = lastName;
  if (age) userToupdate.age = age;

  res.send(`User with id ${id} has been updated`);
};
