const express = require('express');
const router = express.Router();
const {
  getEducations,
  createEducation,
  updateEducation,
  deleteEducation,
  reorderEducation
} = require('../controllers/educationController');
const { protect } = require('../middlewares/auth');

router.route('/').get(getEducations).post(protect, createEducation);
router.route('/reorder').put(protect, reorderEducation);
router.route('/:id').put(protect, updateEducation).delete(protect, deleteEducation);

module.exports = router;
