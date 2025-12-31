const connectDB = require("./db");
const Blog = require("./models/Blog");

const blogsData = [
  {
    blog_id: "BC_001",
    title: "Chatbots Magic: Beginner’s Guidebook",
    author: "Ritika Sankhla",
    published_date: "December 5, 2023",
    year: 2023,
    category: ["Chatbots"],
    tags: [
      "AI Chatbot",
      "AI Chatbots",
      "Artificial Intelligence",
      "Virtual Assistants",
      "Customer Engagement"
    ],
    intro:
      "Embrace the evolution by understanding your website’s unique needs and leveraging Chatbots to create meaningful user experiences.",
    content: {
      headings: [
        "A Beginner's Guide - Introduction to Chatbots",
        "What is an AI Chatbot?",
        "Why Exactly Do You Need a Chatbot?",
        "How Do AI Chatbots Work?",
        "Are Chatbots Universally Helpful to All Websites?",
        "Conclusion"
      ],
      paragraphs_count: 18,
      lists_count: 3,
      full_text:
        "In the fast-paced world of technology, the buzz around chatbots is louder than ever..."
    },
    metrics: {
      word_count: 1850,
      estimated_read_time: "8 min",
      content_depth: "Beginner"
    },
    cta: "For more such amazing content follow us here!",
    source: "BeyondChats",
    blog_url:
      "https://beyondchats.com/blogs/chatbots-magic-beginners-guidebook",
    scraped_from_page: 15,
    scraped_at: new Date(),
    status: "original"
  },

  {
    blog_id: "BC_002",
    title: "Choosing the Right AI Chatbot: A Guide",
    author: "Simran Jain",
    published_date: "November 2023",
    year: 2023,
    category: ["AI Chatbots"],
    tags: ["AI", "Chatbots", "Business Automation"],
    intro:
      "Choosing the right AI chatbot can significantly impact customer experience and business growth.",
    content: {
      headings: [
        "Introduction",
        "Types of AI Chatbots",
        "Key Factors to Consider",
        "Conclusion"
      ],
      paragraphs_count: 14,
      lists_count: 2
    },
    metrics: {
      word_count: 1600,
      estimated_read_time: "7 min",
      content_depth: "Intermediate"
    },
    cta: "Book your free trial today!",
    source: "BeyondChats",
    scraped_from_page: 15,
    status: "original"
  },

  {
    blog_id: "BC_003",
    title: "Why We Are Building Yet Another AI Chatbot",
    author: "Pankaj",
    published_date: "November 2023",
    year: 2023,
    category: ["Artificial Intelligence"],
    tags: ["AI", "Startup", "Chatbot Development"],
    intro:
      "Understanding the motivation and vision behind building an AI chatbot platform.",
    content: {
      headings: [
        "The Problem with Existing Chatbots",
        "Our Vision",
        "Technology Stack",
        "Future Roadmap"
      ],
      paragraphs_count: 12,
      lists_count: 1
    },
    metrics: {
      word_count: 1450,
      estimated_read_time: "6 min",
      content_depth: "Foundational"
    },
    cta: "Start your free trial",
    source: "BeyondChats",
    scraped_from_page: 14,
    status: "original"
  },

  {
    blog_id: "BC_004",
    title: "Will AI Understand the Complexities of Patient Care?",
    author: "Simran Jain",
    published_date: "October 2023",
    year: 2023,
    category: ["AI in Healthcare"],
    tags: ["Healthcare AI", "Patient Care", "Machine Learning"],
    intro:
      "Exploring the role of artificial intelligence in transforming patient care.",
    content: {
      headings: [
        "AI in Healthcare",
        "Benefits and Challenges",
        "Ethical Considerations",
        "Conclusion"
      ],
      paragraphs_count: 15,
      lists_count: 2
    },
    metrics: {
      word_count: 1700,
      estimated_read_time: "8 min",
      content_depth: "Advanced"
    },
    cta: "Learn more about healthcare chatbots",
    source: "BeyondChats",
    scraped_from_page: 14,
    status: "original"
  },

  {
    blog_id: "BC_005",
    title: "Google Ads: Are You Wasting Your Money on Clicks?",
    author: "Pankaj",
    published_date: "October 2023",
    year: 2023,
    category: ["Digital Marketing"],
    tags: ["Google Ads", "Marketing Analytics", "SEO"],
    intro:
      "Analyzing whether paid ads are delivering real business value.",
    content: {
      headings: [
        "Introduction",
        "Understanding Click Costs",
        "Optimizing Ad Spend",
        "Final Thoughts"
      ],
      paragraphs_count: 13,
      lists_count: 1
    },
    metrics: {
      word_count: 1550,
      estimated_read_time: "7 min",
      content_depth: "Intermediate"
    },
    cta: "Optimize your ads with BeyondChats",
    source: "BeyondChats",
    scraped_from_page: 13,
    status: "original"
  }
];

const seedBlogs = async () => {
  try {
    await connectDB();
    await Blog.insertMany(blogsData);
    console.log("All blogs inserted successfully");
  } catch (error) {
    console.error("Error inserting blogs:", error);
  }
};

seedBlogs();