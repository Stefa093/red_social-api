const {DataTypes} = require('sequelize')

const db = require('../utils/database')
const Users = require('../models/users.models')
const Posts = require('../models/posts.models')

const Comments = db.define('comments', {

})

module.exports = Comments