
const dbReactions = [
  {
    reactionBody: 'Wow',
    username: 'sawako',
  },
  {
    reactionBody: 'Cool!',
    username: 'junior',
  },
  {
    reactionBody: 'Lovely!',
    username: 'lernantino',
  },
];

const dbThoughts = [
  {
    thoughtText: 'Surry hills has a lot of nice cafes. I really like them all.',
    username: 'sawako',
    reactions: [dbReactions[1]]
  },
  {
    thoughtText: 'My favorite place is Bondi beach. Make me so relax.',
    username: 'junior',
    reactions: [dbReactions[2]]
  },
  {
    thoughtText: 'Take a break and sleep well. I love those words!',
    username: 'lernantino',
    reactions: [dbReactions[0]]
  },
];

const dbUsers = [
  {
    username: "lernantino",
    email: "lernantino@gmail.com",
    thoughts: [],
    friends: [],

  },
  {
    username: "sawako",
    email: "sawako@gmail.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "junior",
    email: "junior@gmail.com",
    thoughts: [],
    friends: [],
  },
];

// Export the functions for use in seed.js
module.exports = { dbUsers, dbThoughts, dbReactions };
