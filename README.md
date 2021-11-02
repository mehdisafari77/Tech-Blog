# Tech-Blog

## Summary
A tech-blog meant for everyone intrested in the creation of a tech community. This is a CMS-style blog where tech enthusiats can publish their blog posts and even comment on other users' posts. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Video Link To View Process
https://youtu.be/QAriGf0qcco

## Screenshot Of Main Screen
<img width="1200" alt="Screenshot 2021-11-01 at 21 42 23" src="https://user-images.githubusercontent.com/75599021/139788021-f9d8243b-bbd5-4b04-ab50-f8cd3fd9305d.png">

## Screenshot Of Comments Section
<img width="1197" alt="Screenshot 2021-11-01 at 21 43 36" src="https://user-images.githubusercontent.com/75599021/139788140-e37f9de5-aebf-4009-916f-6f16934530b2.png">

## Screenshot Of Signup/Login Section
<img width="1202" alt="Screenshot 2021-11-01 at 21 43 47" src="https://user-images.githubusercontent.com/75599021/139788150-cb1b2bcd-4d82-4682-8bc9-80af0eae1bf8.png">

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
