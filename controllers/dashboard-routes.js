const router = require('express').Router()
const sequelize = require('../config/connection')
const { Post, User, Comment } = require('../models')
const withAuth = require('../utils/auth')

router.get("/", withAuth, (req, res) => {
    Post.findAll({
      where: {
        userId: req.session.userId
      }
    })
      .then(postData => {
        const posts = postData.map((post) => post.get({ plain: true }));
        
        res.render("all-posts", {
          layout: "dashboard",
          posts
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
  });

router.get("/edit/:id", withAuth, (req, res) => {
    Post.findByPk(req.params.id)
      .then(postData => {
        if (postData) {
          const post = postData.get({ plain: true });
          
          res.render('edit-post', {
            layout: 'dashboard',
            post
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
module.exports = router;
