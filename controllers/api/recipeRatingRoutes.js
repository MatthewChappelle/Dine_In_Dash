const express = require('express');
const Project = require('../../models/Project');

const router = express.Router();

// Define a route for updating the rating of a project by its ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;

    // Update the rating and rating_count of the project with the given ID
    const updatedProject = await Project.update(
      {
        rating: Project.sequelize.literal(`rating + ${rating}`),
        rating_count: Project.sequelize.literal('rating_count + 1'),
        actual_rating: Project.sequelize.literal(`rating / rating_count`)
      },
      {
        where: { id },
      }
    );

    if (updatedProject) {
      res.json({ message: 'Rating updated successfully' });
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
