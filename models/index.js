const mongoose = require('mongoose');

const db = 'goalDB';

mongoose.connect(`mongodb://localhost:27017/${db}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;