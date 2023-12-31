const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { dbUsers, dbThoughts, dbReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = dbUsers;
  const thoughts = dbThoughts;
  const reactions = dbReactions;

  await Thought.collection.insertMany(thoughts, reactions);

  await User.collection.insertMany(users);


  console.table(users);
  console.table(thoughts);
  console.table(reactions);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

