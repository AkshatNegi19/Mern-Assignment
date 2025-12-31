const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String },
    publishedDate: { type: Date, default: Date.now },
    url: { type: String },
    updated: { type: Boolean, default: false }
});

module.exports = mongoose.model('Article', articleSchema);