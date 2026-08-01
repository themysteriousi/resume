const Media = require('../models/media.model');
const { cloudinary } = require('../config/cloudinary');

exports.uploadMedia = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file provided' });
    }

    const { path, filename, mimetype, size } = req.file;
    const isVideo = mimetype.startsWith('video/');

    // Cloudinary automatically returns metadata
    // In our storage config we specified resource_type: 'auto', which handles videos and images
    
    // Actually we can get details from req.file. 
    // Wait, multer-storage-cloudinary provides specific properties. 
    // Better to use them.
    const media = new Media({
      url: path,
      public_id: filename,
      type: isVideo ? 'video' : 'image',
      format: mimetype.split('/')[1],
      size: size
    });

    await media.save();

    res.status(201).json(media);
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getMedia = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const mediaFiles = await Media.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Media.countDocuments();

    res.json({
      media: mediaFiles,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    console.error('Get media error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const media = await Media.findById(id);

    if (!media) {
      return res.status(404).json({ message: 'Media not found' });
    }

    // Delete from cloudinary
    const resourceType = media.type === 'video' ? 'video' : 'image';
    await cloudinary.uploader.destroy(media.public_id, { resource_type: resourceType });

    // Delete from database
    await Media.findByIdAndDelete(id);

    res.json({ message: 'Media deleted successfully' });
  } catch (error) {
    console.error('Delete media error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
