const mongoose = require('./index');

const Schema = mongoose.Schema;

const goalSchema = new Schema({
  title: String,
  subtitle: String,
  favourite: Boolean
});

const Goal = mongoose.model('goals', goalSchema);

module.exports = Goal;