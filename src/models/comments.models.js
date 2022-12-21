const {DataTypes} = require('sequelize')

const db = require('../utils/database')
const Users = require('../models/users.models')
const Posts = require('../models/posts.models')

const Comments = db.define('comments', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, Infinity],
        },
      },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          key: 'id',
          model: Users,
        },
      },
    postId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          key: 'id',
          model: Posts,
        },
      }
})

module.exports = Comments