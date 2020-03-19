module.exports = {
  Query: {
    getAllUsers: async (root, {}, { User }) => {
      const users = await User.find();
      return users;
    },
    getUser: async (root, {}, { User }) => {
      const user = await User.findOne({ email });
      return user;
    }
  },
  Mutation: {
    addUser: async (root, { id, username, email }, { User }) => {
      const newUser = await new User({
        id,
        email,
        username
      }).save();
      return newUser;
    },
    deleteUser: async (root, { email }, { User }) => {
      const deletedUser = await User.findOneAndRemove({ email });
      return deletedUser;
    },
    updateUser: async (root, { id, username, email }, { User }) => {
      const updatedUser = await User.findOneAndUpdate(
        { email },
        { id, username }
      );
      return updatedUser;
    }
  }
};
