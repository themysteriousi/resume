const Experience = require('../models/Experience');

// @desc    Get all experience
// @route   GET /api/experience
// @access  Public
exports.getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ 'timeline.startDate': -1 });
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create an experience
// @route   POST /api/experience
// @access  Private
exports.createExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);
    const createdExperience = await experience.save();
    res.status(201).json(createdExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update an experience
// @route   PUT /api/experience/:id
// @access  Private
exports.updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);

    if (experience) {
      Object.assign(experience, req.body);
      const updatedExperience = await experience.save();
      res.json(updatedExperience);
    } else {
      res.status(404).json({ message: 'Experience not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Reorder experience
// @route   PUT /api/experience/reorder
// @access  Private
exports.reorderExperience = async (req, res) => {
  try {
    const { orderedIds } = req.body;
    
    if (!orderedIds || !Array.isArray(orderedIds)) {
      return res.status(400).json({ message: 'orderedIds array is required' });
    }

    const updatePromises = orderedIds.map((id, index) => {
      return Experience.findByIdAndUpdate(id, { displayOrder: index });
    });

    await Promise.all(updatePromises);
    
    res.status(200).json({ message: 'Experience reordered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete an experience
// @route   DELETE /api/experience/:id
// @access  Private
exports.deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);

    if (experience) {
      await experience.deleteOne();
      res.json({ message: 'Experience removed' });
    } else {
      res.status(404).json({ message: 'Experience not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
