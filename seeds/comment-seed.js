const { Comment } = require('../models');

const commentData = [
    {
        userId: 2,
        postId: 1,
        body: 'This is a very nice tool for real, totally in love with it.The hype is real, lol'
    },
    {
        userId: 4,
        postId: 2,
        body: 'Wow, that is truly sad'
    },
    {
        userId: 2,
        postId: 3,
        body: 'Nice job!'
    },
    {
        userId: 3,
        postId: 5,
        body: 'Fantastic job everyone!'
    },
    {
        userId: 2,
        postId: 3,
        body: 'LMAO, that is a really cool app!'
    },
    {
        userId: 5,
        postId: 4,
        body: 'Wow! Congrats to the Facebook team!'
    },
    {
        userId: 1,
        postId: 3,
        body: 'Amazing!'
    },
    {
        userId: 3,
        postId: 1,
        body: 'Nice app!'
    }
]

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;