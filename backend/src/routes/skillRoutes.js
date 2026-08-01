const express = require('express');
const router = express.Router();
const {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
  reorderSkills
} = require('../controllers/skillController');
const { protect } = require('../middlewares/auth');

router.route('/').get(getSkills).post(protect, createSkill);
router.route('/reorder').put(protect, reorderSkills);
router.route('/:id').put(protect, updateSkill).delete(protect, deleteSkill);

module.exports = router;
