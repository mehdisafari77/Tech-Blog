const { User } = require('../models');

const userData = [
    {
        username: 'mehdi',
        email: 'm@gmail.com',
        password: '123456'
    },
    {
        username: 'hadi',
        email: 'h@gmail.com',
        password: '123456'
    },
    {
        username: 'alex',
        email: 'a@gmail.com',
        password: '123456'
    },
    {
        username: 'selma',
        email: 's@gmail.com',
        password: '123456'
    },
    {
        username: 'mary',
        email: 'mary@gmail.com',
        password: '123456'
    },
    {
        username: 'maral',
        email: 'maral@gmail.com',
        password: '123456'
    }
]

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;