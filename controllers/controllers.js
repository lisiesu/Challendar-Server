const Goal = require('../models/goals');

exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find();
    res.status(200).send(goals);
  } catch (error) {
    res.status(400);
  }
};

exports.postGoals = async (req, res) => {
  try {
    const { title, subtitle, favourite } = req.body;
    const newGoal = await Goal({ title, subtitle,  favourite }).save();
    res.status(201).send(newGoal);
  } catch (error) {
    res.status(400);
  }
};

exports.deleteGoals = async (req,res) => {
  const { id } = req.params;
  try {
    await Goal.findByIdAndRemove(id);
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
};
