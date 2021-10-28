const router = require('express').Router()
const sequelize = require('../config/connection')
const { Post, User, Comment } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', withAuth, (req, res) => {
    const postData = Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        
    })
    const allPosts = postData.map(post => post.get({ plain: true }))
    res.render('', { layout: 'dashboard', allPosts })
})