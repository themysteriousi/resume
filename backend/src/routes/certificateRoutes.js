const express = require('express');
const router = express.Router();
const {
  getCertificates,
  getCertificateById,
  createCertificate,
  updateCertificate,
  deleteCertificate,
  reorderCertificates
} = require('../controllers/certificateController');
const { protect } = require('../middlewares/auth');

router.route('/reorder')
  .put(protect, reorderCertificates);

router.route('/')
  .get(getCertificates)
  .post(protect, createCertificate);

router.route('/:id')
  .get(getCertificateById)
  .put(protect, updateCertificate)
  .delete(protect, deleteCertificate);

module.exports = router;
