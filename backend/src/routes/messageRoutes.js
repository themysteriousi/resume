const express = require('express');
const router = express.Router();
const {
  getMessages,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessage,
} = require('../controllers/messageController');
const { protect } = require('../middlewares/auth');

router.route('/')
  .get(protect, getMessages)
  .post(createMessage); // Public endpoint for contact form

router.route('/:id')
  .get(protect, getMessageById)
  .put(protect, updateMessage)
  .delete(protect, deleteMessage);

module.exports = router;
