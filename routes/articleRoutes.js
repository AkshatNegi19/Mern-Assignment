const express = require('express');
const router = express.Router();
const Article = require("../models/Blog.js");

// CREATE Article
router.post('/', async (req, res) => {
    try {
        const article = new Article(req.body);
        await article.save();
        res.status(201).json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ All Articles
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find().sort({ publishedDate: -1 });
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ Single Article by ID
router.get('/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) return res.status(404).json({ message: 'Article not found' });
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE Article by ID
router.put('/:id', async (req, res) => {
    try {
        const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!article) return res.status(404).json({ message: 'Article not found' });
        res.json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE Article by ID
router.delete('/:id', async (req, res) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        if (!article) return res.status(404).json({ message: 'Article not found' });
        res.json({ message: 'Article deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
