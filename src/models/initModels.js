const Users = require('./users.models');
const RecoveryPasswords = require('./recoveryPasswords.models');
const Posts = require('./posts.models');
const Likes = require('./likes.models');
const Comments = require('./comments.models');
const Follows = require('./follows.models')

const initModels = () => {
  //? FK = RecoveryPasswords
  Users.hasMany(RecoveryPasswords);
  RecoveryPasswords.belongsTo(Users);

  Users.hasMany(Posts);
  Posts.belongsTo(Users);

  Users.hasMany(Likes);
  Likes.belongsTo(Users);

  Posts.hasMany(Likes);
  Likes.belongsTo(Posts);

  Users.hasMany(Follows)
  Follows.belongsToMany(Users)
};

module.exports = initModels;
