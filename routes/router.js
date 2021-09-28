const router = require('express').Router();
const { getGoals, postGoals, deleteGoals } = require('../controllers/controllers');

router.get('/goals', getGoals);
router.post('/goals', postGoals);
// router.post('/goalsAchieved', selectedGoals)
router.delete('/goals/:id', deleteGoals);

module.exports = router;