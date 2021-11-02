const router = require('express').Router();
const { Comment } = require('../../models/');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// Create comment
router.post('/', withAuth, (req, res) => {
  // Checking user session
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    })
      .then(commentData => res.json(commentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// Get all commments route
router.get('/', (req, res) => {
  Comment.findAll({})
    .then(commentData => res.json(commentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete comment route
router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(commentData => {
        if (!commentData) {
          res.status(404).json({ message: 'No comments were found for id' });
          return;
        }
        res.json(commentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;