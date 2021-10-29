# Tech-Blog

## Summary
A tech-blog meant for everyone intrested in the creation of a tech community. This is a CMS-style blog where tech enthusiats can publish their blog posts and even comment on other users' posts. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Video Link To View Process

## Screenshot


## Built With
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/docs/)
* [NPM-Library](https://docs.npmjs.com/)
* [Expres.js](https://expressjs.com/)
* [Sequelize](https://sequelize.org/master/index.html)

## Installation Steps
1. Clone project.
2. Open terminal and run these commands in order
    - npm install
    - node seeds/index.js
    - npm start

## Code Snippet Authentication Code
```javascript
const withAuth = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect("/login");
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
```

## Author

* **Mehdi Safari**

- [Link to Portfolio Site](https://mehdisafari77.github.io/Basic-Bio/)
- [Link to Github](https://github.com/mehdisafari77)
- [Link to LinkedIn](https://www.linkedin.com/in/mehdi-safari-992799142/)
