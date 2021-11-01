const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

// Route for getting all posts for homepage
router.get("/", (req, res) => {
  Post.findAll({
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
    .then((postData) => {
      const posts = postData.map((post) => post.get({ plain: true }));

      res.render("all-posts", { posts });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Route for getting single post
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
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
      .then((postData) => {
        if (postData) {
          const post = postData.get({ plain: true });
  
          res.render("single-post", { post });
        } else {
          res.status(404).end();
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("login");
  });
  
  router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("signup");
  });
  
  module.exports = router;