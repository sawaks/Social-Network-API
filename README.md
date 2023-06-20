# Social-Network-API

## Description
This project is the proof that I learned through week 18. This application is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It is used by Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Installation
1. Clone the repo: Type `git clone https://github.com/sawaks/Social-Network-API.git` on the terminal tab at the folder.
2. Install NPM packages: Type `npm install` on the terminal tab at the folder.
3. Enter "npm run seed": Type `npm run seed` on the terminal at index.js.
4. Enter "node index.js": Type `node index.js` on the terminal at index.js.

## Usage
1. Continuing above Installation step 4.
2. Open Insomnia. 
3. Type `localhost:3001/api/users/`: you can do `GET` for getting all user's data aand `POST` for creating new user's data.
4. Type `localhost:3001/api/users/:userId`: you can do `GET`, `DELETE` and `PUT`. For getting, deleting and updating a user's data belong to user id.
5. Type `localhost:3001/api/users/:userId/friends`: you can do `POST` for adding new friend to user id.
6. Type `localhost:3001/api/users/:userId/friends/:friendId`: you can do `DELETE` for deleting a friend and updating a user's data.
7. Type `localhost:3001/api/thoughts/`: you can do `GET` for getting all thoughts and `POST` for creating new thught.
8. Type `localhost:3001/api/thoughts/:thoughtId`: you can do `GET`, `DELETE` and `PUT`. For getting, deleting and updating a thought belong to thought id.
9. Type `localhost:3001/api/thoughts/:thoughtId/reactions`: you can do `POST` for adding new reaction to thought id.
10. Type `localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`: you can do `DELETE` for deleting a reaction and updating a thought's data.

## GitHub Repository Link
https://github.com/sawaks/Social-Network-API.git

## A walkthrough video Link
https://watch.screencastify.com/v/T2oa2HFt5UwSYGYwWRTR