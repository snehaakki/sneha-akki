
const express = require('express'); 
const router = express.Router();
const Review = require('../models/Review');

// Correct model import

// Get all items
router.get('/', async (req, res) => {
  try {
    const review = await Review.find();
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
});

// Get a single item
router.get('/:id', async (req, res) => {
  try {
    const review= await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching item' });
  }
});

// Create a new item
router.post('/', async (req, res) => {
  try {
    const { name, productid,ratings,description } = req.body;
    const review = new Review({
      name,
      productid,
      ratings,
      description,
      
    });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: 'Error creating item', error: error.message });
  }
}); 

// Update an item completely (PUT)
router.put('/:id', async (req, res) => {
  try {
    const { name, productid,ratings,description } = req.body;
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { name,productid,ratings, description },
      { new: true, runValidators: true }
    );
    if (!review) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item', error: error.message });
  }
});

// Partially update an item (PATCH)
router.patch('/:id', async (req, res) => {
  try {
    const review= await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!review) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item', error: error.message });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item' });
  }
});

module.exports = router;