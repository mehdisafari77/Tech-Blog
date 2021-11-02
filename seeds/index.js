const postSeeds = require('./post-seed');
const userSeeds = require('./user-seed');
const commentSeeds = require('./comment-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

  await postSeeds();
    console.log('\n----- POSTS SEEDED -----\n');

  await commentSeeds();
    console.log('\n----- COMMENTS SEEDED -----\n');
  
  await userSeeds();
    console.log('\n----- USERS SEEDED -----\n');


  process.exit(0);
};

seedAll();