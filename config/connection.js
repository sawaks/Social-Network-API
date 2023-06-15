const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialNetworkApplications', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
