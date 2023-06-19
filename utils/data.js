// const names = [
//   'Grace',
//   'Alex',
//   'Mark',
//   'Tamar',
//   'Farish',
//   'Sarah',
//   'Nathaniel',
//   'Parker',
// ];

// const emails = [
//   'tracker123@gmail.com',
//   'phone123@gmail.com',
//   'apple123@gmail.com',
//   'hello123@gmail.com',
//   'movie123@gmail.com',
//   'sunny123@gmail.com',
//   'winter123@gmail.com',
//   'spring123@gmail.com',
// ];


// const thoughts = [
//   'Surry hills has a lot of nice cafes. I really like them all.',
//   'My favorite place is Bondi beach. Make me so relax.',
//   'Great idea is not always easy to come.',
//   'Take a break and sleep well. I love those words!',
//   'My holidays in Japan was one of the best memories. ',
//   'The darling spa is amazing. I really enjoyed.',
//   'My birthday is coming soon!',
//   'I wanna use more TicTok but it seems difficult for me.',
// ];

// const reactions = [
//   'Wow',
//   'I think so to.',
//   'Great job.',
//   'Amazing!',
//   'Totally disagree.',
//   'Completely agree.',
//   'Nice!',
//   'This is coll!',

// ];

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
    thoughts: [dbThoughts[2]],
    friends: [],

  },
  {
    username: "sawako",
    email: "sawako@gmail.com",
    thoughts: [dbThoughts[0]],
    friends: [],
  },
  {
    username: "junior",
    email: "junior@gmail.com",
    thoughts: [dbThoughts[1]],
    friends: [],
  },
];

/* 

Save the thoughts with reactions array into DB first. 
After that, query the db for all thoughts. You will get some ObjectIDs of thoughts
Put those Ids in the user array

Save some users in without friends. 
Query the db for users. You will get some ObjectIDs for users

Define a few other users with friends referring to the previous users
Save the other users

*/

// Get a random item given an array
// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];


// Function to generate random applications that we can add to the database. Includes application tags.
// const getRandomUsers = (int) => {
//   let results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       username: getRandomArrItem(names),
//       email: getRandomArrItem(emails),
//       thoughts: [...getThoughts(3)],
//       friends: [...getRandomUsers(3)],
//     });
//   }
//   return results;
// };

// Create the tags that will be added to each application
// const getThoughts = (int) => {
//   if (int === 1) {
//     return getRandomArrItem(thoughts);
//   }
//   const results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       thoughtText: getRandomArrItem(thoughts),
//       username: getRandomArrItem(names),
//       reactions: [...getRandomReactions(3)],
//     });
//   }
//   return results;
// };

// const getRandomReactions = (int) => {
//   if (int === 1) {
//     return getRandomArrItem(reactions);
//   }
//   const results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       reactionBody: getRandomArrItem(reactions),
//       username: getRandomArrItem(names),
//     });
//   }
//   return results;
// };

// Export the functions for use in seed.js
module.exports = { dbUsers, dbThoughts, dbReactions };
