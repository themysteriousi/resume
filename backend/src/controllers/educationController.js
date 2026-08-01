const Education = require('../models/Education');

// @desc    Get all education
// @route   GET /api/education
// @access  Public
exports.getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({ 'timeline.startDate': -1 });
    res.status(200).json(educations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create an education
// @route   POST /api/education
// @access  Private
exports.createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    const createdEducation = await education.save();
    res.status(201).json(createdEducation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update an education
// @route   PUT /api/education/:id
// @access  Private
exports.updateEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);

    if (education) {
      Object.assign(education, req.body);
      const updatedEducation = await education.save();
      res.json(updatedEducation);
    } else {
      res.status(404).json({ message: 'Education not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Reorder education
// @route   PUT /api/education/reorder
// @access  Private
exports.reorderEducation = async (req, res) => {
  try {
    const { orderedIds } = req.body;
    
    if (!orderedIds || !Array.isArray(orderedIds)) {
      return res.status(400).json({ message: 'orderedIds array is required' });
    }

    const updatePromises = orderedIds.map((id, index) => {
      return Education.findByIdAndUpdate(id, { displayOrder: index });
    });

    await Promise.all(updatePromises);
    
    res.status(200).json({ message: 'Education reordered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete an education
// @route   DELETE /api/education/:id
// @access  Private
exports.deleteEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);

    if (education) {
      await education.deleteOne();
      res.json({ message: 'Education removed' });
    } else {
      res.status(404).json({ message: 'Education not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
