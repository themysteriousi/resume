const express = require('express');
const router = express.Router();
const {
  getTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  reorderTestimonials
} = require('../controllers/testimonialController');
const { protect } = require('../middlewares/auth');

router.route('/')
  .get(getTestimonials)
  .post(protect, createTestimonial);

router.route('/reorder')
  .put(protect, reorderTestimonials);

router.route('/:id')
  .get(getTestimonialById)
  .put(protect, updateTestimonial)
  .delete(protect, deleteTestimonial);

module.exports = router;
