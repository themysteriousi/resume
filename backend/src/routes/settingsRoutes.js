const express = require('express');
const router = express.Router();
const {
  getSEO,
  updateSEO,
  getTheme,
  updateTheme,
  getResume,
  updateResume,
  getHero,
  updateHero,
  getAbout,
  updateAbout,
  getSocialLinks,
  updateSocialLinks
} = require('../controllers/settingsController');
const { protect } = require('../middlewares/auth');

// SEO Routes
router.route('/seo')
  .get(getSEO)
  .put(protect, updateSEO);

// Theme Routes
router.route('/theme')
  .get(getTheme)
  .put(protect, updateTheme);

// Resume Routes
router.route('/resume')
  .get(getResume)
  .put(protect, updateResume);

// Hero Routes
router.route('/hero')
  .get(getHero)
  .put(protect, updateHero);

// About Routes
router.route('/about')
  .get(getAbout)
  .put(protect, updateAbout);

// Social Links Routes
router.route('/social')
  .get(getSocialLinks)
  .put(protect, updateSocialLinks);

module.exports = router;
