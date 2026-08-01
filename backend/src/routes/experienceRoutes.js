const express = require('express');
const router = express.Router();
const {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
  reorderExperience
} = require('../controllers/experienceController');
const { protect } = require('../middlewares/auth');

router.route('/').get(getExperiences).post(protect, createExperience);
router.route('/reorder').put(protect, reorderExperience);
router.route('/:id').put(protect, updateExperience).delete(protect, deleteExperience);

module.exports = router;
