const uuid = require('uuid')

const Follows = require('../models/follows.models')

const followUser = async (follower, following) => {
    const data = await Follows.create({
        id: uuid.v4(),
        userId: follower,
        userId1: following
    })
    return data
}
