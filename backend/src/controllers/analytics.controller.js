const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Message = require('../models/Message');

exports.getAnalytics = async (req, res) => {
  try {
    const totalProjects = await Project.countDocuments();
    const totalSkills = await Skill.countDocuments();
    const totalMessages = await Message.countDocuments();
    
    // Calculate simple mock views for demonstration if real view tracking doesn't exist
    // In a real app, you would have a PageView model.
    const mockPageViews = Array.from({ length: 7 }, (_, i) => ({
      name: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
      views: Math.floor(Math.random() * 50) + 10,
    }));

    res.json({
      stats: {
        totalProjects,
        totalSkills,
        totalMessages,
        totalViews: mockPageViews.reduce((acc, curr) => acc + curr.views, 0)
      },
      pageViews: mockPageViews
    });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
