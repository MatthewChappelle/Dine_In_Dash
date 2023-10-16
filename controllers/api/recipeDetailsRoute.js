const express = require('express');
const Project = require('../../models/Project'); // Adjust the path as needed

const router = express.Router();

// Define a route for displaying recipe details
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch the recipe details, including its rating
    const recipe = await Project.findByPk(id);

    if (recipe) {
      const averageRating = recipe.total_rating / recipe.rating_count;
      res.render('recipe-details', { recipe, averageRating });
    } else {
      res.status(404).json({ error: 'Recipe not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
