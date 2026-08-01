const SEO = require('../models/SEO');
const Theme = require('../models/Theme');
const Resume = require('../models/Resume');
const Hero = require('../models/Hero');
const About = require('../models/About');
const SocialLinks = require('../models/SocialLinks');

// --- SEO Settings ---

// @desc    Get SEO settings
// @route   GET /api/settings/seo
// @access  Public
const getSEO = async (req, res) => {
  try {
    const seo = await SEO.findOne();
    res.json(seo || {});
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update SEO settings
// @route   PUT /api/settings/seo
// @access  Private
const updateSEO = async (req, res) => {
  try {
    let seo = await SEO.findOne();
    if (seo) {
      Object.assign(seo, req.body);
      seo = await seo.save();
    } else {
      seo = new SEO(req.body);
      await seo.save();
    }
    res.json(seo);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};


// --- Theme Settings ---

// @desc    Get Theme settings
// @route   GET /api/settings/theme
// @access  Public
const getTheme = async (req, res) => {
  try {
    const theme = await Theme.findOne();
    res.json(theme || {});
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update Theme settings
// @route   PUT /api/settings/theme
// @access  Private
const updateTheme = async (req, res) => {
  try {
    let theme = await Theme.findOne();
    if (theme) {
      Object.assign(theme, req.body);
      theme = await theme.save();
    } else {
      theme = new Theme(req.body);
      await theme.save();
    }
    res.json(theme);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};


// --- Resume Settings ---

// @desc    Get Resume
// @route   GET /api/settings/resume
// @access  Public
const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne();
    res.json(resume || {});
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update Resume
// @route   PUT /api/settings/resume
// @access  Private
const updateResume = async (req, res) => {
  try {
    let resume = await Resume.findOne();
    if (resume) {
      Object.assign(resume, req.body);
      resume = await resume.save();
    } else {
      resume = new Resume(req.body);
      await resume.save();
    }
    res.json(resume);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

// --- Hero Settings ---
const getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne();
    res.json(hero || {});
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
const updateHero = async (req, res) => {
  try {
    let hero = await Hero.findOne();
    if (hero) {
      Object.assign(hero, req.body);
      hero = await hero.save();
    } else {
      hero = new Hero(req.body);
      await hero.save();
    }
    res.json(hero);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

// --- About Settings ---
const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about || {});
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
const updateAbout = async (req, res) => {
  try {
    let about = await About.findOne();
    if (about) {
      Object.assign(about, req.body);
      about = await about.save();
    } else {
      about = new About(req.body);
      await about.save();
    }
    res.json(about);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

// --- Social Links Settings ---
const getSocialLinks = async (req, res) => {
  try {
    const links = await SocialLinks.findOne();
    res.json(links || {});
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
const updateSocialLinks = async (req, res) => {
  try {
    let links = await SocialLinks.findOne();
    if (links) {
      Object.assign(links, req.body);
      links = await links.save();
    } else {
      links = new SocialLinks(req.body);
      await links.save();
    }
    res.json(links);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

module.exports = {
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
};
