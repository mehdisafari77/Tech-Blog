const { Post } = require('../models');

const postData = [
    {
        title: 'Ticketeer, The New Ticketing App!',
        body: 'The newest ticketing app "ticketeer" goes out in the market today, and is already becoming the most loved place for customers to bu their tickets from',
        userId: 3
    },
    {
        title: 'Quibi, The App That Came Crashing With Failure',
        body: "Quibi was a streaming app meant for bite sized video content on the go, for people with busy lives, but in need of really good hollywood quality content, It started really well with great technology, but as fast as it grew, it also failed with the same speed.",
        userId: 1
    },
    {
        title: 'Holy-Hour Is Live Now!',
        body: 'An app meant for users to find the number of churches and bars in a city! Great for getting to know what type of a city you are going to, before actually going there.',
        userId: 2
    },
    {
        title: 'Metaverse',
        body: 'The newest in the tech-world: Facebook is now called Meta!, and they are now trying to create a whole new world immersive in AR/VR. Test out the Oculus products in order to get a glimpse of what is to come.',
        userId: 5
    },
    {
        title: 'Tech-Blog Now Has 1M Subscribers',
        body: 'We always post aboutt the successes and updates of others in the tech world, however lets take a rime to appreciate the blog we all have had a hand in creating together! Thank you to the team at Tech Blog for always supporting our great viewers and our tech!',
        userId: 4
    }
]

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;