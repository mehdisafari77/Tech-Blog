const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 1,
        comment_text: 'This is a very nice tool for real, totally in love with it.The hype is real, lol'
    },
    {
        user_id: 4,
        post_id: 2,
        comment_text: 'Wow, that is truly sad'
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: 'Nice job!'
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: 'Fantastic job everyone!'
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: 'LMAO, that is a really cool app!'
    },
    {
        user_id: 5,
        post_id: 4,
        comment_text: 'Wow! Congrats to the Facebook team!'
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: 'Amazing!'
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: 'Nice app!'
    }
]

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;