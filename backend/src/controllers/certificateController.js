const Certificate = require('../models/Certificate');

// @desc    Get all certificates
// @route   GET /api/certificates
// @access  Public
const getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find({}).sort({ displayOrder: 1, createdAt: -1 });
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get single certificate by ID
// @route   GET /api/certificates/:id
// @access  Public
const getCertificateById = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id);
    if (certificate) {
      res.json(certificate);
    } else {
      res.status(404).json({ message: 'Certificate not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a certificate
// @route   POST /api/certificates
// @access  Private
const createCertificate = async (req, res) => {
  try {
    // Set displayOrder to be the last one if not provided
    if (req.body.displayOrder === undefined) {
      const count = await Certificate.countDocuments();
      req.body.displayOrder = count;
    }
    const certificate = new Certificate(req.body);
    const createdCertificate = await certificate.save();
    res.status(201).json(createdCertificate);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

// @desc    Update a certificate
// @route   PUT /api/certificates/:id
// @access  Private
const updateCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id);

    if (certificate) {
      Object.assign(certificate, req.body);
      const updatedCertificate = await certificate.save();
      res.json(updatedCertificate);
    } else {
      res.status(404).json({ message: 'Certificate not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

// @desc    Delete a certificate
// @route   DELETE /api/certificates/:id
// @access  Private
const deleteCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id);

    if (certificate) {
      await certificate.deleteOne();
      res.json({ message: 'Certificate removed' });
    } else {
      res.status(404).json({ message: 'Certificate not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Reorder certificates
// @route   PUT /api/certificates/reorder
// @access  Private
const reorderCertificates = async (req, res) => {
  try {
    const { orderedIds } = req.body;
    
    if (!orderedIds || !Array.isArray(orderedIds)) {
      return res.status(400).json({ message: 'Please provide an array of ordered IDs' });
    }

    // Update each certificate's displayOrder based on its index in the array
    const updatePromises = orderedIds.map((id, index) => {
      return Certificate.findByIdAndUpdate(id, { displayOrder: index });
    });

    await Promise.all(updatePromises);
    
    res.json({ message: 'Certificates reordered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = {
  getCertificates,
  getCertificateById,
  createCertificate,
  updateCertificate,
  deleteCertificate,
  reorderCertificates
};
