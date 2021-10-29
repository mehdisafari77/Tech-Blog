const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: 'This is a very nice tip, thank you!'
    },
    {
        user_id: 4,
        post_id: 2,
        comment_text: 'Truly helpful and great!'
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
        comment_text: 'Congrats!'
    },
    {
        user_id: 5,
        post_id: 4,
        comment_text: 'Keep up the great work everyone!'
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "Amazing!"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;