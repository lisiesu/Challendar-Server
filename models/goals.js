const mongoose = require('./index');

const Schema = mongoose.Schema;

const goalSchema = new Schema({
  value: {type:String, required:true},
  achieved: {type:Boolean, required: true, default: false},
  date: Date
});

const Goal = mongoose.model('goals', goalSchema);

module.exports = Goal;