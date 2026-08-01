const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/media.controller');
const { upload } = require('../config/cloudinary');
const { protect } = require('../middlewares/auth');

router.post('/', protect, upload.single('file'), mediaController.uploadMedia);
router.get('/', protect, mediaController.getMedia);
router.delete('/:id', protect, mediaController.deleteMedia);

module.exports = router;
