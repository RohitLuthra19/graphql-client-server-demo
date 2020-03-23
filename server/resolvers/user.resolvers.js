const { User } = require("../model");

module.exports = {
  Query: {
    getAllUsers: async (root, {}) => {
      const users = await User.find();
      return users;
    },
    getUser: async (root, { email }) => {
      const user = await User.findOne({ email });
      return user;
    }
  },
  Mutation: {
    addUser: async (root, { id, username, email }) => {
      const newUser = await new User({
        id,
        email,
        username
      }).save();
      return newUser;
    },
    deleteUser: async (root, { email }) => {
      const deletedUser = await User.findOneAndRemove({ email });
      return deletedUser;
    },
    updateUser: async (root, { id, username, email }) => {
      const updatedUser = await User.findOneAndUpdate(
        { email },
        { id, username }
      );
      return updatedUser;
    }
  }
};
