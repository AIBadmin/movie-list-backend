import bcrypt from "bcrypt";

const bcryptPassword = async (password) => {
  return bcrypt.hashSync(password, 10);
};
const comparePassword = async (password, matchPassword) => {
  return bcrypt.compareSync(password, matchPassword);
};

export { bcryptPassword, comparePassword };
