const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  reorderProjects
} = require('../controllers/projectController');
const { protect } = require('../middlewares/auth');

router.route('/')
  .get(getProjects)
  .post(protect, createProject);

router.route('/reorder')
  .put(protect, reorderProjects);

router.route('/:id')
  .get(getProjectById)
  .put(protect, updateProject)
  .delete(protect, deleteProject);

module.exports = router;
