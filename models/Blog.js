const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    blog_id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: String,
    published_date: String,
    year: Number,
    category: [String],
    tags: [String],

    intro: String,

    content: {
      headings: [String],
      paragraphs_count: Number,
      lists_count: Number,
      full_text: String
    },

    metrics: {
      word_count: Number,
      estimated_read_time: String,
      content_depth: String
    },

    cta: String,
    source: String,
    blog_url: String,
    scraped_from_page: Number,
    scraped_at: Date,
    status: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
