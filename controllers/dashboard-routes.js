const router = require('express').Router()
const sequelize = require('../config/connection')
const { Post, User, Comment } = require('../models')
const withAuth = require('../utils/auth')

router.get("/", withAuth, (req, res) => {
    Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'created_at',
        'post_content'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: 'username'
          }
        },
        {
          model: User,
          attributes: 'username'
        }
      ]
    })
      .then(postData => {
        const posts = postData.map((post) => post.get({ plain: true }));
        
        res.render("all-posts-admin", {
          layout: "dashboard",
          posts
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
  });

  router.get("/new", withAuth, (req, res) => {
    Post.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'created_at',
        'post_content'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: 'username'
          }
        },
        {
          model: User,
          attributes: 'username'
        }
      ]
    })
    .then(postData => {
      // serialize data before passing to template
      const posts = postData.map(post => post.get({ plain: true }));
      res.render('new-post', { posts, loggedIn: true, layout: "dashboard" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  // Get one post route
router.get("/edit/:id", withAuth, (req, res) => {
  Post.findByPk({
    where: {
      user_id: req.params.user_id
    },
    attributes: [
      'id',
      'title',
      'created_at',
      'post_content'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: 'username'
        }
      },
      {
        model: User,
        attributes: 'username'
      }
    ]
  })
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
