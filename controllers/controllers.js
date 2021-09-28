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
  console.log(req.body)
  try {
    let newGoals=[];
    for(let i=0; i < req.body.length; i++){
      newGoals.push(await new Goal(req.body[i]).save())
    }
    // const newGoal = await new Goal(req.body).save();
    res.status(201).send(newGoals);
  } catch (error) {
    res.status(400);
  }
};

// exports.selectedGoals = async (req, res) => {
//    try {
//     const { id } = req.params;
//     const updatedGoal = await  Goal.findOneAndUpdate(id)
//     res.status(201).send(updatedGoal);
//   } catch (error) {
//     res.status(400);
//   }
// };

exports.deleteGoals = async (req,res) => {
  const { id } = req.params;
  try {
    await Goal.findByIdAndRemove(id);
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
};
