const router = require('express').Router();
const { Recipe } = require('../../models');

// Route to get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.findAll();

    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get a single recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);

    if (!recipe) {
      res.status(404).json({ message: 'Recipe not found' });
      return;
    }

    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add more routes for creating, updating, and deleting recipes if needed

module.exports = router;
